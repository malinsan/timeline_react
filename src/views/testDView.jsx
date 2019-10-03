import React from 'react'
import { LineChart } from '../components/d3_lineChart'

export class TestD3View extends React.Component {

    data = [[1991, 34], [1992, 55], [1993,67], [1994, 98], [1995, 92]]

    timelineData = this.data.map(d => [new Date(d[0], 1), 0])
    chartData = this.data.map(d => [new Date(d[0], 1), d[1]])

    chartOptions = {
        data: this.chartData,
        height: 600,
        width: 1000
    }

    timelineOptions = {
        data: this.timelineData,
        height: 100,
        width: 1000,
        xaxis: { show: false },
        yaxis: { show: false }
    }


    render() {
        return (<div>
            <LineChart {...this.timelineOptions}/>
            <LineChart {...this.chartOptions} />
        </div>)
    }
}