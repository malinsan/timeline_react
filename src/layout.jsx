import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { HC_TimelineChart } from "./components/hc_timelineChart"
import { AC_TimelineChart } from './components/ac_timelineChart'

const { Header, Content, Footer } = Layout

export class EVLLayout extends Component {

    state = {
        selectedKeys: ['/'+this.props.history.location.pathname.split('/')[1]]
    }

    menu = [
        {exact: true, path: '/', component: HC_TimelineChart, icon: <Icon type='experiment' />, name: 'Highcharts'},
        {path: '/apexcharts', component: AC_TimelineChart, icon: <Icon type='crown' />, name: 'Apexcharts'}
    ]

    get routes() {
        return this.menu.map(this.createRoute)
    }

    createRoute({ path, component, exact }) {
        if (exact) {
            return <Route key={path} exact path={path} component={component} />
        }

        return <Route 
                    key={path}
                    path={path}
                    component={component}
                />
    }


    get menuItems() {
        return this.menu.map(e =>
            <Menu.Item key={e.path}>
                <Link to={e.path}>
                    {e.icon}{e.name}
                </Link>
            </Menu.Item>
        )
    }

    componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
            this.setState({
                selectedKeys: ['/' + this.props.history.location.pathname.split('/')[1]],
            });    
        }
    }


    render(){
        return(
        <div className="Layout">
            <Layout>
                <Header theme='light'>
                    <Menu
                        style={{ lineHeight: '64px' }}
                        mode='horizontal'
                        theme='dark'
                        selectedKeys={this.state.selectedKeys}
                    >
                        {this.menuItems}
                    </Menu>
                </Header>
                <Content  style={{ padding: '0 12px', minHeight: 280 }}>
                    <Switch>
                        {this.routes}
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    EVLedger ©2019 Created by Malin Thelin
                </Footer>
            </Layout>
        </div>
        )
    }
}