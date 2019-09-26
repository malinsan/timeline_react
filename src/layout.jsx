import React, { Component } from "react";
import { TimelineCanvas } from './util/timelineCanvas'
import { Layout } from 'antd'
import { TimelineChart } from "./components/timelineChart";

const { Header, Content, Footer } = Layout

export class EVLLayout extends Component{

    render(){
      return(
        <div className="Layout">
            <Layout>
                <Header theme='light'>Header</Header>
                <Content  style={{ padding: '0 12px', minHeight: 280 }}><div id="timelineContainer"></div><TimelineChart /></Content>
                <Footer style={{ textAlign: 'center' }}>EVLedger ©2019 Created by Malin Thelin</Footer>
            </Layout>
        </div>
      )
    }

/* 
    render() {
        return
        (
            <div>
                <div></div>
                <div></div>
            </div>
        )
    } */
}