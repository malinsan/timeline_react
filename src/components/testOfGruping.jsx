import React from 'react'
import ReactApexChart from "react-apexcharts"


function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
}

// The global window.Apex variable below can be used to set common options for all charts on the page
Apex = {
dataLabels: {
    enabled: false
},
stroke: {
    curve: 'straight'
},
toolbar: {
    tools: {
    selection: false
    }
},
markers: {
    size: 6,
    hover: {
    size: 10
    }
},
tooltip: {
    followCursor: false,
    theme: 'dark',
    x: {
    show: false
    },
    marker: {
    show: false
    },
    y: {
    title: {
        formatter: function () {
        return ''
        }
    }
    }
},
grid: {
    clipMarkers: false
},
yaxis: {
    tickAmount: 2
},
xaxis: {
    type: 'datetime'
},
}


export class TestGroupChart extends React.Component {
      
      constructor(props) {
        super(props);
  
        this.state = {
          series1: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
              min: 10,
              max: 60
            })
          }],
          series2: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
              min: 10,
              max: 30
            })
          }],
          series3: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
              min: 10,
              max: 90
            })
          }],
          chartOptionsLine1: {
            chart: {
              id: 'fb',
              group: 'social',
            },
            colors: ['#008FFB'],
          },
          chartOptionsLine2: {
            chart: {
              id: 'tw',
              group: 'social',
            },
            colors: ['#546E7A'],
  
          },
          chartOptionsArea: {
            chart: {
              id: 'yt',
              group: 'social',
            },
            colors: ['#00E396'],
  
          }
        }
      }
  
      render() {
  
        return (
          
  
          <div id="wrapper">
            <div id="chart-line">
              <ReactApexChart type="line" height="160"  options={this.state.chartOptionsLine1} series={this.state.series1}/>
            </div>
  
            <div id="chart-line2">
              <ReactApexChart type="line" height="160"  options={this.state.chartOptionsLine2} series={this.state.series2}/>
            </div>
  
            <div id="chart-area">
              <ReactApexChart type="area" height="160"  options={this.state.chartOptionsArea} series={this.state.series3}/>
            </div>
          </div>)
      }
}