import React from 'react'
import * as d3 from 'd3'


export class LineChart extends React.Component {
    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const { data } = this.props
        var { height, width, xaxis, yaxis } = this.props

        var margin = { top: 10, right: 30, bottom: 30, left: 60 }
        height -= margin.top - margin.bottom
        width -= margin.left - margin.right

        // CREATE CANVAS
        var svg = d3.select(this.refs.canvas)
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform',
                    `translate(${margin.left}, ${margin.top})`)


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
                    .curve(d3.curveMonotoneX) // apply smoothing to the line
        
        // DRAWING 

        if (!xaxis || xaxis && xaxis.show) {
            svg.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(xAxis)
        }

        if (!yaxis || yaxis && yaxis.show) {
            svg.append('g')
            .call(yAxis)
        }
       
        svg.append('path')
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line(data))

    }

    render() {
        return <div ref='canvas'></div>
    }
}