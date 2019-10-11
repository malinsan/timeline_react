import React from 'react'
import { LineChart } from '../components/d3_lineChart'
import { colors } from '../util/colors'
import * as d3 from 'd3'

export class TestD3View extends React.Component {
    state = {
        isLoading: true,
        svg: ''
    }

    width = 1200
    height = 800
    timelineHeight = 100
    chartHeight = 500

    data = [[1991, 34], [1992, 55], [1993,67], [1994, 98], [1995, 92]]

    timelineData = this.data.map(d => [new Date(d[0], 1), 0])
    chartData = this.data.map(d => [new Date(d[0], 1), d[1]])

    sharedOptions = {
        width: this.width,
        color: colors.evOrange,
        margin_left: 10
    }

    chartOptions = {
        data: this.chartData,
        height: this.chartHeight,
        margin_top: this.timelineHeight
    }

    timelineOptions = {
        data: this.timelineData,
        height: this.timelineHeight,
        xaxis: { show: false },
        yaxis: { show: false },
        markers: {
            size: 5,
            color: this.sharedOptions.color,
            hoverSize: 10,
        },
        drawLine: (i,x,y) => this.drawDashedLineDown(i,x,y),
        removeLine: (i) => this.removeLine(i),
        drawTooltip: (i,x,y) => this.drawTooltip(i,x,y),
        removeTooltip: (i) => this.removeTooltip(i)
    }

    componentDidMount() {
        this.drawCanvas()
    }

    drawCanvas() {
        var { svg } = this.state

        svg = d3.select(this.refs.chartcanvas)
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                .append('g').attr('transform', 'translate(60,10)')

        this.setState({ svg })
    }

    drawDashedLineDown(i, x1, y1) {
        const y2 = parseInt(y1) + this.chartHeight + this.timelineHeight
        
        this.state.svg.append("line")
            .style("stroke", colors.evGrayDark)
            .attr("class", `line_${i}`)
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', 4) // Makes the line dashed
            .attr("x1", x1)
            .attr("y1", y1)
            .attr("x2", x1)
            .attr("y2", y2)
    }

    removeLine(i) {
        d3.select(`.line_${i}`).remove()
    }

    drawTooltip(i,x,cy) {
        let id = `tooltip_${i}`

        if (!d3.select(`#${id}`).empty()) { return }

        const y = parseInt(cy) + this.chartHeight + this.timelineHeight

        let tooltip = this.state.svg.append('rect')
                                .attr('id', id)
                                .attr('fill', colors.evDarkGreen)
                                .attr('width', 100)
                                .attr('height', 50)
                                .attr('x', `${x}px`)
                                .attr('y', `${y}px`)
                                .attr('opacity', 0)

        tooltip.transition().duration(200).style('opacity', 0.9)
    }

    removeTooltip(i) {
        let id = `tooltip_${i}`
        let tooltip = d3.select(`#${id}`)

        tooltip.transition()
            .duration(300)
            .style('opacity', 0.0)
            .remove()
    }

    render() {
        return (<div ref='chartcanvas'>
            <LineChart svg={this.state.svg} {...this.sharedOptions} {...this.timelineOptions}/>
            <LineChart svg={this.state.svg} {...this.sharedOptions} {...this.chartOptions} />
        </div>)
    }
}