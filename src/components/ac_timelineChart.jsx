import React from 'react'
import Chart from "react-apexcharts"

export class AC_TimelineChart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ],
          timelineOptions: {
            grid: {
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            yaxis: {
              axisTicks: {
                  show: false
              },
              labels: {
                  style: {
                      color: 'rgba(0, 0, 0, 0)'
                  }
              }
            },
            xaxis: {
                floating: true,
                axisTicks: {
                  show: false
                },
                axisBorder: {
                  show: false
                },
                labels: {
                  show: false
                },
            },
            annotations: {
                points: [{
                    x: 1991,
                    y: 1,
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
                            background: '#FF4560',
                        },
                        text: 'Point Annotation',
                    }
                }]
            }
          }
        }
      }
    
      render() {
        return ( 
        <div>
            <Chart
                options={this.state.timelineOptions}
                series={[{ data: [[1991, 1], [1992, 1], [1993, 1], [1994, 1], [1995, 1], [1996,1], [1997,1], [1998,1], [1999,1]] }]}
                height="50%"
            />
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="100%"
            />
        </div>)
      }
}