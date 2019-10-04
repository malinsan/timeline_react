import React from 'react'
import { LineChart } from '../components/d3_lineChart'
import { colors } from '../util/colors'

export class TestD3View extends React.Component {

    data = [[1991, 34], [1992, 55], [1993,67], [1994, 98], [1995, 92]]

    timelineData = this.data.map(d => [new Date(d[0], 1), 0])
    chartData = this.data.map(d => [new Date(d[0], 1), d[1]])

    sharedOptions = {
        width: 1000,
        color: colors.evOrange
    }

    chartOptions = {
        data: this.chartData,
        height: 600,
    }

    timelineOptions = {
        data: this.timelineData,
        height: 100,
        xaxis: { show: false },
        yaxis: { show: false },
        markers: {
            size: 5,
            color: this.sharedOptions.color,
            hoverSize: 10
        },
    }


    render() {
        return (<div>
            <LineChart {...this.sharedOptions} {...this.timelineOptions}/>
            <LineChart {...this.sharedOptions} {...this.chartOptions} />
        </div>)
    }
}