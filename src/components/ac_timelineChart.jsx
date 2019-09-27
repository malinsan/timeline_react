import React from 'react'
import Chart from 'react-apexcharts'

export class AC_timelineChart extends React.Component {
    render() {
        const options = {
            chart: {
                type: 'line'
            },
            series: [{
                data: [1, 2, 3]
            }]
            

        }

        return <div>Hello där</div>
    }
}