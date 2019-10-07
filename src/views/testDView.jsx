import React from 'react'
import { LineChart } from '../components/d3_lineChart'
import { colors } from '../util/colors'
import * as d3 from 'd3'

export class TestD3View extends React.Component {
    state = {
        isLoading: true,
        svg: ''
    }

    data = [[1991, 34], [1992, 55], [1993,67], [1994, 98], [1995, 92]]

    timelineData = this.data.map(d => [new Date(d[0], 1), 0])
    chartData = this.data.map(d => [new Date(d[0], 1), d[1]])

    sharedOptions = {
        width: 1000,
        color: colors.evOrange,
        margin_left: 10
    }

    chartOptions = {
        data: this.chartData,
        height: 600,
        margin_top: 100
    }

    timelineOptions = {
        data: this.timelineData,
        height: 100,
        xaxis: { show: false },
        yaxis: { show: false },
        markers: {
            size: 5,
            color: this.sharedOptions.color,
            hoverSize: 10,
        },
        callback: (x,y) => this.drawDashedLineDown(x,y)
    }

    componentDidMount() {
        this.drawCanvas()
    }

    drawCanvas() {
        var { svg } = this.state

        svg = d3.select(this.refs.chartcanvas)
                .append('svg')
                .attr('width', 1000)
                .attr('height',800)
                .attr('fill', 'black')
                .append('g').attr('transform', 'translate(60,10)')

        this.setState({ svg })
    }

    drawDashedLineDown(x1, y1) {
        const y2 = parseInt(y1 + this.chartOptions.height + this.timelineOptions.height)

        this.state.svg.append("line")          // attach a line
            .style("stroke", "black")  // colour the line
            .attr('stroke-width', 3)
            .attr("x1", x1)     // x position of the first end of the line
            .attr("y1", y1)      // y position of the first end of the line
            .attr("x2", x1)     // x position of the second end of the line
            .attr("y2", y2)
    }

    render() {
        return (<div ref='chartcanvas'>
            <LineChart svg={this.state.svg} {...this.sharedOptions} {...this.timelineOptions}/>
            <LineChart svg={this.state.svg} {...this.sharedOptions} {...this.chartOptions} />
        </div>)
    }
}