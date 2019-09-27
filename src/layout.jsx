import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { HC_TimelineChart } from "./components/hc_timelineChart"

const { Header, Content, Footer } = Layout

export class EVLLayout extends Component {

    get routes() {
        const menu = [
            {path: '/', component: <HC_TimelineChart />},
            {path: '/apexchart'}
        ]

        return menu.map(this.createRoute)
    }

    createRoute({ path, component }) {
        return <Route 
                    key={path}
                    path={path}
                    render={() => component}
                />
    }


    render(){
      return(
        <div className="Layout">
            <Layout>
                <Header theme='light'>
                    <Menu
                        style={{ lineHeight: '64px' }}
                        mode="horizontal"
                        theme='dark'
                        defaultSelectedKeys={['highcharts']}
                    >
                        <Menu.Item key='highcharts'><Icon type='experiment' />{'Highcharts'}</Menu.Item>
                        <Menu.Item key='apexcharts'><Icon type='crown' />{'Apexcharts'}</Menu.Item>

                    </Menu>
                </Header>
                <Content  style={{ padding: '0 12px', minHeight: 280 }}>
                    <Switch>
                        {this.routes}
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>EVLedger ©2019 Created by Malin Thelin</Footer>
            </Layout>
        </div>
      )
    }
}