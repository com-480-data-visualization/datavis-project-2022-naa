import React from "react";
import "antd/dist/antd.min.css"
import './index.css';
import HorizontalTimeline from "./components/HorizontalTimeline"
import { Layout, Anchor }  from 'antd';
import ElectionsMaps from "./components/ElectionsMaps";
import ApexChart from "./components/GenderDist"
const { Link } = Anchor;
const { Header, Footer, Sider, Content } = Layout;


const style_text_block = {
    margin: '20px 30px 10px',
    textAlign: 'left',
    color: 'black',
    fontSize: '20px',
    padding: 0}

const style_title = {
    margin: '20px 30px 10px',
    textAlign: 'center',
    color: 'black',
    fontSize: '30px',
    padding: 0,
}

const App = () => (

    <Layout hasSider >
        <Sider
            width={300}
            style={{
                backgroundColor: '',
                color: 'white',
                textAlign: 'center',
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <Anchor style={{color: 'white'}}>
                <Link href={"#Election Process"} title={<div
                style={{fontSize:'28px',
                    color:'white'}}>
                    Election Process
                    </div>}>
                </Link>
                <Link href={"#presidents"} title={<div
                    style={{fontSize:'28px',
                        color:'white'}}>
                    American Presidents
                </div>}>
                </Link>
                <Link href={"#American political landscape"} title={<div
                    style={{fontSize:'28px',
                        color:'white'}}>
                    Political landscape </div>}>
                </Link>
                <Link href={"#Map"} title={<div
                    style={{fontSize:'28px',
                        color:'white'}}>
                    Geographical analysis
                </div>} />
                    <Link href={"#gender"} title={<div
                        style={{fontSize:'28px',
                            color:'white'}}>
                         Typical Profiles
                    </div>} />
            </Anchor>
        </Sider>
        <Layout
            className="site-layout"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                marginLeft: 300,
            }}
        >
            <Header
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    textAlign: 'center',
                    color: 'rgba(0,0,0,0.8)',
                    fontSize: '50px',
                    bold: 'true',
                    padding: 10,
                }}>
                <span className="font-link" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 'bold'}}>
                    <div>Understanding US </div>
                        <div>Presidential Elections</div>
                </span>
            </Header>
            <Content
                className="site-layout-background"
                style={{
                    margin: '100px 30px 20px',
                    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '30px',
                    padding: 0,
                }}>
                <span style={{
                    fontStyle: 'italic'}}
                      className="font-link">
                    <div>
                        What are the dynamics in the US democratic process?</div>
                </span>
            </Content>

            <Content
                className="site-layout-background"
                style={{
                    margin: '20px 30px 10px',
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '20px',
                    padding: 0,
                }}> <img src='https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
                         height={"200px"} width={'500px'}
                         backgroundColor={ 'rgba(255, 255, 255, 0.5)'}/>
            </Content >
            <Content id='Election Process'
                className="site-layout-background"
                style={style_title}>
                <span className="font-link"
                      style={{  color: 'rgba(0,0,0,0.8)',
                                fontWeight: 'bold'}}>
                    The American election process explained
                </span>
            </Content>
            <Content  style={style_text_block}>
                    <span className="font-link">
               <p> In most U.S. elections, candidates are directly elected by the American citizens. However, this is not the case for the president and vice president of the country. Instead, citizens vote for Electors to form the Electoral College, whose sole purpose is to appoint the president and vice president of the country every four years.</p>
                    <p> The election of the Electoral College is processed at a State level. Each state is allocated a number of votes equal to the number of senators and representatives in its U.S. Congressional delegation. This implies that the winning president will not necessarily be the candidate with the highest number of votes from the citizens. Rather, it happens frequently that the second most popular candidate wins the vote of the Electoral College.</p>
 </span>
            </Content>
            <Content id='presidents'
                     className="site-layout-background"
                     style={style_title}>
                <span className="font-link"
                      style={{  color: 'rgba(0,0,0,0.8)',
                          fontWeight: 'bold'}}>
                A look at the last American presidents
                </span>
            </Content>
            <Content style={{
                marginLeft: 100,
                marginTop: 24
            }}>
            <HorizontalTimeline>
            </HorizontalTimeline>
            </Content>
            <Content id='American political landscape'
                     className="site-layout-background"
                     style={style_title}>
                <span className="font-link"
                      style={{  color: 'rgba(0,0,0,0.8)',
                          fontWeight: 'bold'}}>
                    Two historic parties competing for the presidency of the country
                </span>
            </Content>
            <Content style={style_text_block}>
                <span className="font-link">
               <p> The American political landscape is wide and varied. In 2020, more than 100 candidates were running for the presidency of the country. Most of them are independent and not affiliated to a party, but there are still over 420 registered political parties in the country. However, only the two largest parties are usually known. A third has recently emerged, but is still much behind the two largest parties of the country.</p>
                <p>Founded in 1828, the Democratic Party is the world’s oldest political party. The left-leaning and liberal oriented political party is the largest of the country in terms of number of registered members, and third largest in the entire world.     </p>
                <p> Founded in 1854, the Republican Party is the second largest political party of the United-States. The right-leaning and conservative party believes in a more individual oriented rights and justice, as opposed to its main rival.</p>
                </span>
                </Content>
            <Content id='Map'
                     className="site-layout-background"
                     style={style_title}>
                <span className="font-link"
                      style={{  color: 'rgba(0,0,0,0.8)',
                          fontWeight: 'bold'}}>
                    Geographical trends showing a country divided in two parts
                </span>
            </Content>
                <Content style={style_text_block}>
                <span className="font-link">
                    <p>Below is a chart showing the dynamics of the citizen votes at each State. The year of the election can be changed by clicking on the dots below the map.</p>
                </span>
                </Content>
            <Content
                     style={{
                    margin: '24px 0px 0',
                    overflow: 'initial',
                }}
            >
            <ElectionsMaps />
            </Content>
            <Content id='gender'
                     className="site-layout-background"
                     style={style_title}>
                <span className="font-link"
                      style={{  color: 'rgba(0,0,0,0.8)',
                          fontWeight: 'bold'}}>
                    A closer look at the candidates of the presidential elections
                </span>
            </Content>
            <Content style={style_text_block}>
                <span className="font-link">
                    <p>The below graph shows common characteristics of the top 10 most popular candidates of the last nine presidential elections. Older males are the most typical candidate profiles, and females still seem much behind of the political life in the United-States.</p>
                </span>
            </Content>
            <Content
                style={style_text_block} >
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