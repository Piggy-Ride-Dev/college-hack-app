"use client";
import { useGetAllInstitutions } from '@/hooks/useInstitution';
import { Button, Select } from 'antd';
import "./styles.scss";

//TODO - Map p/ pegar todos os college
//TODO - Filter para tirar os repetidos

export default function firstAccess() {
  const { data: institutions } = useGetAllInstitutions();
  console.log(institutions);

  return (
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
  );
};