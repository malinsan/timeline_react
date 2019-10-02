import React from 'react'
import { DraggableButton } from '../components/draggableButton'
import Chart from "react-apexcharts"
import { Row, Col } from 'antd'


export class TestView extends React.Component {
    constructor(props) {
        super(props)
        this.onDrag = this.onDrag.bind(this)
    }

    data = [[1991, 1], [1992, 1], [1993, 1], [1994, 1], [1995, 1], [1996,1], [1997,1], [1998,1], [1999,1]]

    state = {
        buttonValue: 0,
        options: {
            chart: {
                id: "line-chart",
                group: 'lol',
                toolbar: { show: false }
            },
            xaxis: { categories: this.data.map(e => e[0]) },
            yaxis: { labels: { minWidth: 10 } }
        },
        series: [{
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91,34]
        }],
    }

    onDrag(buttonValue) {
        this.setState({ buttonValue })
    }

    render() {
        const { buttonValue, options, series } = this.state
        console.log('yobdro')

        return (
            <div>
                <Row>
                    <div>{buttonValue}</div>
                </Row>
                <Row>
                    <Col span={23}>
                        <Chart
                            options={options}
                            series={series}
                            type="line"
                            width="100%"
                            height="500px"
                        />
                    </Col>
                    <Col span={1}>
                        <div style={{ background: '#555555', height: '455px' }}>
                            <DraggableButton  onDrag={this.onDrag}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}