import React from "react";
import RadarChart from "./components/RadarChart";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Anchor }  from 'antd';
import ElectionsMaps from "./components/ElectionsMaps";
import ApexChart from "./components/GenderDist"
const { Link } = Anchor;
const { Header, Footer, Sider, Content } = Layout;


const App = () => (

    <Layout hasSider>
        <Sider
            width={250}
            style={{
                textAlign: 'center',
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <Anchor>
                <Link href="#map" title="Map"/>
                <Link href="#chart" title="Gender distribution" />
            </Anchor>
        </Sider>
        <Layout
            className="site-layout"
            style={{
                marginLeft: 250,
            }}
        >
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
            />
            <Content
                style={{
                    margin: '24px 0px 0',
                    overflow: 'initial',
                }}
            >
            <ElectionsMaps />
                <div
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        textAlign: 'center',
                    }}
                >
                </div>
            </Content>
            <Content
                style={{
                margin: '24px 0px 0',
                overflow: 'initial' }} >
                <ApexChart>
                </ApexChart>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                 USA elections ©2022 Created by NAA
            </Footer>
        </Layout>
    </Layout>
);

export default App;