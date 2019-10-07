import React from 'react'
import * as d3 from 'd3'


export class LineChart extends React.Component {
    constructor(props) {
        super(props)

        this.handleMouseOver = this.handleMouseOver.bind(null, this)
        this.handleMouseOut = this.handleMouseOut.bind(null, this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.svg !== prevProps.svg && typeof this.props.svg === 'object') {
            this.drawChart()
        }
    }

    drawChart() {
        const { data, xaxis, yaxis, markers, color, margin_top } = this.props
        var { svg, height, width } = this.props

        var margin = { top: 10, right: 30, bottom: 30, left: 60 }
        height -= margin.top - margin.bottom
        width -= margin.left - margin.right

        var chart = svg.append('g')
            .attr('height', height)
            .attr('width', width)
            .attr('transform', `translate(0,${margin_top || 0})`)

         // X AXIS
        var xScale = d3.scaleTime() 
                    .domain(d3.extent(data, d => d[0])).nice()
                    .range([0, width]);

        var xAxis = d3.axisBottom(xScale)
                    .tickFormat(d3.timeFormat('%Y'))
                    .ticks(d3.timeYear)

        // YAXIS
        var yScale = d3.scaleLinear()
                    .domain([0, d3.max(data, d => d[1])])
                    .range([height, 0])

        var yAxis = d3.axisLeft(yScale)

        // PATH
        var line = d3.line()
                    .x(d => xScale(d[0])) // set the x values for the line generator
                    .y(d => yScale(d[1])) // set the y values for the line generator 
                    .curve(d3.curveCardinal) // apply smoothing to the line

        // DRAWING
        if (!xaxis || xaxis && xaxis.show) {
            chart.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(xAxis)
        }

        if (!yaxis || yaxis && yaxis.show) {
            chart.append('g')
            .call(yAxis)
        }

        chart.append('path')
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 1.5)
        .attr('d', line(data))

        // MARKERS
        if (markers) {
            chart.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", d => xScale(d[0]))
            .attr("cy", d => yScale(d[1]))
            .attr('r', markers.size || 5)
            .attr('fill', markers.color)
            .on('mouseover', this.handleMouseOver)
            .on("mouseout", this.handleMouseOut)
        }

        this.setState({ svg })
    }

    handleMouseOver(lineChart, obj, i, mList) {
        let marker = d3.select(mList[i])
        marker.attr('r', lineChart.props.markers.hoverSize || marker.attr('r') * 2)

        //lineChart.drawDashedLineDown(marker.attr('cx'), marker.attr('cy'))
        lineChart.props.callback(marker.attr('cx'), marker.attr('cy'))
    }

    handleMouseOut(lineChart, obj, i, mList) {
        let marker = d3.select(mList[i])
        marker.attr('r', lineChart.props.markers.size || 5)
    }

    drawDashedLineDown(x1, y1) {
        const y2 = y1 + this.state.height

        this.props.svg.append("line")          // attach a line
            .style("stroke", "black")  // colour the line
            .attr('stroke-width', 3)
            .attr("x1", x1)     // x position of the first end of the line
            .attr("y1", y1)      // y position of the first end of the line
            .attr("x2", x1)     // x position of the second end of the line
            .attr("y2", y2)
    }

    render() {
        return <div ref='canvas'></div>
    }
}