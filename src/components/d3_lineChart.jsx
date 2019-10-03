import React from 'react'
import * as d3 from 'd3'


export class LineChart extends React.Component {
    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const data = [[1991, 34], [1992, 55], [1993,67], [1994, 98], [1995, 92]]
        /* const dateData = data.map(d => {return { date: d3.timeFormat("%Y-%m-%d")(new Date(d[0],1)), value: d[1] }})
        const h = 700
        const w = 1500

        const svg = d3.select(this.refs.canvas)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h) */


        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom

        // append the svg object to the body of the page
        var svg = d3.select(this.refs.canvas)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");


        // X AXIS
        var xScale = d3.scaleTime() 
                    .domain(d3.extent(data, d => new Date(d[0],1))).nice()
                    .range([0, width]);
          
        var xAxis = d3.axisBottom(xScale)
                    .tickFormat(d3.timeFormat("%Y"))
                    .ticks(d3.timeYear)

        // YAXIS
        var yScale = d3.scaleLinear()
                    .domain([0, d3.max(data, d => d[1])])
                    .range([height, 0])
    
        var yAxis = d3.axisLeft(yScale)


        svg.append("g")
        .attr("transform", `translate(0,${height})`)
            .call(xAxis);

        svg.append('g')
            .call(yAxis)
          

  
    }

    render() {
        return <div ref='canvas'></div>
    }
}