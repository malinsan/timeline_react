import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import timeline from 'highcharts/modules/timeline'

timeline(Highcharts)

export class TimelineChart extends Component {

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
              series: [{
                dataLabels: {
                  allowOverlap: false,
                  format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                    '{point.x:%d %b %Y}</span><br/>{point.label}'
                },
                marker: {
                  symbol: 'circle'
                },
                data: [{
                  x: Date.UTC(1951, 5, 22),
                  name: 'First dogs in space',
                  label: 'First dogs in space',
                }, {
                  x: Date.UTC(1957, 9, 4),
                  name: 'First artificial satellite',
                  label: 'First artificial satellite',
                }, {
                  x: Date.UTC(1959, 0, 4),
                  name: 'First artificial satellite to reach the Moon',
                  label: 'First artificial satellite to reach the Moon',
                }, {
                  x: Date.UTC(1961, 3, 12),
                  name: 'First human spaceflight',
                  label: 'First human spaceflight',
                }]
            }]
        })
    }
 
    render() {
        const chartOptions = {
            title: {
                text: 'My chart'
            },
            series: [{
                data: [1, 2, 3]
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
