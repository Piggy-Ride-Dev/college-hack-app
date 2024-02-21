"use client";
import React from 'react';
// import logo from "../src/logo.svg";
import "./styles.scss";
import { Breadcrumb, Layout, Menu, theme, Image, Select  } from 'antd';

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header className='header'>
        {/* <Image src={logo}/> */}
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className='content'
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <h1>Lets Get Started</h1>
          <p>First, tell me your Institution and Program</p>
          <div className='input'>
            <span>Institution</span>
            <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            />
          </div>
          <div className='input'>
            <span>Institution</span>
            <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        College Hack ©{new Date().getFullYear()} Created by Piggy
      </Footer>
    </Layout>
  );
};

export default App;