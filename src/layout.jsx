import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { HC_TimelineChart } from "./components/hc_timelineChart"
import { AC_TimelineChart } from './components/ac_timelineChart'
import * as cc from "./util/chartconfig";
import { TestView } from './views/testView'
import { TestD3View } from './views/testDView'

const { Header, Content, Footer } = Layout

export class EVLLayout extends Component {

    state = {
        selectedKeys: ['/'+this.props.history.location.pathname.split('/')[1]]
    }

    menu = [
        {exact: true, path: '/', component: HC_TimelineChart, icon: <Icon type='experiment' />, name: 'Highcharts'},
        {path: '/apexcharts', component: AC_TimelineChart, icon: <Icon type='crown' />, name: 'Apexcharts'},
        {path: 'test', icon: <Icon type='smile' />, name: 'Test Whatever', submenu: [
            {path: '/dragbutton', component: TestView, icon: <Icon type='edit' />, name: 'Drag test'},
            {path: '/d3', component: TestD3View, icon: <Icon type='diff' />, name: 'D3 test'}
        ]}
    ]

    get routes() {
        const menuItemList = this.menu.map(m => m.submenu || [m]).flat()
        const menuItemsWithComponent = menuItemList.filter(m => m.component)
        const routeNodes = menuItemsWithComponent.map(this.createRoute)

        return [...routeNodes]
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

    createMenuItem({ path, icon, name, submenu }) {
        if (submenu) {
            return (
                <Menu.SubMenu key={path} title={<span>{icon}<span>{name}</span></span>}>
                    {submenu.map((x) => this.createMenuItem(x))}
                </Menu.SubMenu>
            )
        }

        return (
            <Menu.Item key={path}>
                <Link to={path}>
                    {icon}{name}
                </Link>
            </Menu.Item>
        )
    }


    get menuItems() {
        return this.menu.map(e => this.createMenuItem(e))
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
                <Content style={{ align: 'center', background: '#fff', margin: '10px', padding: '24px', minHeight: 500 }}>
                    <Switch>{ this.routes }</Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    EVLedger ©2019 Created by Malin Thelin
                </Footer>
            </Layout>
        </div>
        )
    }
}