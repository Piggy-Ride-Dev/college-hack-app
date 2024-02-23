"use client";
import React from 'react';
import logo from "../../src/logo.svg";
import Image from 'next/image';
import "./styles.scss";
import { Layout, Select, Button  } from 'antd';
import { useQuery } from 'react-query';

const { Header, Content, Footer } = Layout;

const fetchData = async () => {
  const response = await fetch('https://college-hack-api.azurewebsites.net/institution');
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados');
  }
  return response.json();
};

//TODO - Map p/ pegar todos os college
//TODO - Filter para tirar os repetidos

const App: React.FC = () => {
  const { data, error, isLoading } = useQuery('institutionData', fetchData);
  console.log(data);

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
                size='large'
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
                size='large'
								options={[
									{ value: '1', label: '1' },
									{ value: '2', label: '2' },
									{ value: '3', label: '3' },
								]}
							/>
						</div>
          </div>
          <Button size='large' type="primary" block>Next</Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        College Hack ©{new Date().getFullYear()} Created by Piggy
      </Footer>
    </Layout>
  );
};

export default App;