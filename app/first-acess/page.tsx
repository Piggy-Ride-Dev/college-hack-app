"use client";
import React from 'react';
import logo from "../../src/logo.svg";
import Image from 'next/image';
import "./styles.scss";
import { Layout, Select, Button  } from 'antd';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='layout-container'>
      <Header className='header'>
        <Image src={logo} alt="Logo" />
      </Header>
      <Content>
        <div className='container'>
        	<div className='content'>
						<h1>Let's Get Started!</h1>
						<p>First, tell me your Institution and Program</p>
						<div className='input'>
							<span>Institution</span>
								<Select
								options={[
									{ value: '1', label: '1' },
									{ value: '2', label: '2' },
									{ value: '3', label: '3' },
								]}
								/>
						</div>
						<div className='input'>
							<span>Program</span>
							<Select
								options={[
									{ value: '1', label: '1' },
									{ value: '2', label: '2' },
									{ value: '3', label: '3' },
								]}
							/>
						</div>
          </div>
          <Button type="primary" block>Next</Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        College Hack ©{new Date().getFullYear()} Created by Piggy
      </Footer>
    </Layout>
  );
};

export default App;