import React, { Component } from 'react'
import { Layout } from 'antd';
import SliderTabBar from "@components/sliderTabBar"
const { Header, Content, Footer, Sider } = Layout;
export default class layoutWrapper extends Component {
    render() {
        console.log(this.props)
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <SliderTabBar></SliderTabBar>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
