import React from 'react'
import Logs from './Logs';
import Breadcrum from 'src/pages/components/Breadcrum';

const Index = () => {
  return (
    <>
      <Breadcrum title="Login Logs"/>

        <Logs />
    </>
  )
}

export default Index
