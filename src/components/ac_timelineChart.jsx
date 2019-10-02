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
                    group: 'lol',
                    toolbar: { show: false }
                },
                xaxis: { categories: this.data.map(e => {console.log(e[0]); return e[0]}) },
                yaxis: { labels: { minWidth: 10 } }
            },
            series: [{
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91,34]
            }],
            
            timelineOptions: {
                chart: { 
                    toolbar: { show: false },
                    events: {
                        dataPointsMouseEnter: () => console.log('HALLÅ ELLER')
                    },
                    group: 'lol'        
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
                    labels: { minWidth: 10, style: { color: 'rgba(0, 0, 0, 0)' } }
                },
                xaxis: {
                    floating: true,
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    labels: { show: false },
                },
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