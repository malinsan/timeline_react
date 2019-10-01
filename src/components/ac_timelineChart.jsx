import React from 'react'
import Chart from "react-apexcharts"
import { colors } from '../util/colors';

export class AC_TimelineChart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                    toolbar: { show: false }
                },
                xaxis: { categories: this.data.map(e => e[0]) }
            },
            series: [{
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],
            
            timelineOptions: {
                chart: { 
                    toolbar: { show: false },
                    events: {
                        dataPointsMouseEnter: () => console.log('HALLÅ ELLER')
                    },
                    
                },
                tooltip: {
                    shared: false,
                    intersect: true
                },
                grid: {
                    yaxis: {
                        lines: { show: false }
                    }
                },
                yaxis: {
                    axisTicks: { show: false },
                    labels: { style: { color: 'rgba(0, 0, 0, 0)' } }
                },
                xaxis: {
                    floating: true,
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false },
                },
                //annotations: { points: this.data.map(this.createPoints) }
                markers: {
                    size: 8,
                    colors: colors.evOrange,
                    strokeColors: '#fff',
                    strokeWidth: 2,
                    hover: {
                        size: 14
                    }
                }
            }
        }
    }

    data = [[1991, 1], [1992, 1], [1993, 1], [1994, 1], [1995, 1], [1996,1], [1997,1], [1998,1], [1999,1]]

    createPoints(e) {
        return {
            x: e[0],
            y: e[1],
            marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 2,
                cssClass: 'apexcharts-custom-class'
            },
            label: {
                borderColor: '#FF4560',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#FF4560'
                },
                text: 'Hallå eller'
            }
        }
    }
    
    render() {
        const { options, series, timelineOptions } = this.state


        return (<div>
            <Chart
                options={timelineOptions}
                series={[{ data: this.data }]}
                height="100px"
            />
            <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
                height="500px"
            />
        </div>)
    }
}