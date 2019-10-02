import React from 'react'
import * as d3 from 'd3'

export class TestD3View extends React.Component {

    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const data = [12, 5, 6, 6, 9, 10]
        const h = 700
        const w = data.length * 100

        const svg = d3.select(this.refs.canvas)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h)
        
        svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d,i) => i * 70)
        .attr('y', (d) => h - 10*d)
        .attr('width', 65)
        .attr('height', (d) => d * 10)
        .attr('fill', 'green')
  
    }

    render() {
        return <div ref='canvas'></div>
    }
}