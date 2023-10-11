import React from 'react'
import History from './History';
import Breadcrum from 'src/pages/components/Breadcrum';

const Index = () => {
  return (
    <>
      <Breadcrum title={'Deposit History'}/>

        <History />
    </>
  )
}

export default Index
