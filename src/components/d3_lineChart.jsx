import React from 'react'
import * as d3 from 'd3'


export class LineChart extends React.Component {
    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const data = [[1991, 34], [1992, 55], [1993,67], [1994, 98], [1995, 92]]
        const dateData = data.map(d => {return { date: d3.timeFormat("%Y-%m-%d")(new Date(d[0],1)), value: d[1] }})
        const h = 700
        const w = 1500

        const svg = d3.select(this.refs.canvas)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h)


        /* var axisScale = d3.scaleTime()
                        .domain(d3.extent(dateData, d => d.date))
                        .range([0,1000])

        svg.append('g')
            .attr('transform', 'translate(0,100)')
            .call(d3.axisBottom(axisScale)) */

        console.log(d3.extent(data, d => new Date(d[0],1)))

        var xScale = d3.scaleTime() 
                    .domain(d3.extent(data, d => new Date(d[0],1))).nice()
                    .range([20, 900]);
          
        var xAxis = d3.axisBottom(xScale)
                    .tickFormat(d3.timeFormat("%Y"))
                    .ticks(d3.timeYear)

        svg.append("g")
            .attr("transform", "translate(100,450)")
            .call(xAxis);
          

  
    }

    render() {
        return <div ref='canvas'></div>
    }
}