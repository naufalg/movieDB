import React from 'react';
import { Layout, Menu } from 'antd';
import { ArrowLeftOutlined, DatabaseFilled } from '@ant-design/icons';
import { useHistory } from 'react-router';

const { Header } = Layout;

export default function Navbar({ detail }) {
  const history = useHistory();

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: '#221f1f',
        fontFamily: 'Bebas Neue, cursive',
      }}
    >
      {detail && (
        <ArrowLeftOutlined
          style={{
            position: 'fixed',
            fontSize: '20px',
            top: 23,
            left: 20,
            color: 'white',
          }}
          onClick={() => {
            history.goBack();
          }}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          color: '#e50914',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        <span
          onClick={() => {
            history.push('/');
          }}
          style={{ cursor: 'pointer', fontSize: '28px' }}
        >
          Movie DB &nbsp;
          <DatabaseFilled style={{ color: '#e50914', fontSize: '24px' }} />
        </span>
      </div>
    </Header>
  );
}
