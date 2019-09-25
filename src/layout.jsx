import React, { Component } from "react";
import { TimelineCanvas } from './util/timelineCanvas'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

export class EVLLayout extends Component{

    render(){
      return(
        <div className="Layout">
            <Layout>
                <Header theme='light'>Header</Header>
                <Content  style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
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