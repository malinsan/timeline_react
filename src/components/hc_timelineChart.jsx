import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import timeline from 'highcharts/modules/timeline'
import { spaceDataSet, spaceDataSetLine } from '../util/dataSet'

timeline(Highcharts)

export class HC_TimelineChart extends Component {

    componentDidMount() {
        this.highChartsRender()
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
              type: 'timeline',
              renderTo: 'timelineContainer'
            },
            xAxis: {
                type: 'datetime',
                visible: false
            },
            yAxis: {
                gridLineWidth: 1,
                title: null,
                labels: {
                    enabled: false
                }
            },
            legend: {
                enabled: false
            },
            title: {
                text: 'Timeline of Space Exploration'
            },
            subtitle: {
                text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>'
            },
            tooltip: {
                style: {
                  width: 300
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                dataLabels: {
                  allowOverlap: false,
                  format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                    '{point.x:%d %b %Y}</span><br/>{point.label}'
                },
                marker: {
                  symbol: 'circle'
                },
                data: spaceDataSet
            }]
        })
    }
 
    render() {
        const chartOptions = {
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime'
            },
            series: [{
                data: spaceDataSetLine
            }]
        }

        return (
            <div>
                <div id="timelineContainer"></div>
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>
        )
    }

}
