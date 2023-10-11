import React from 'react'
import Deposit from './Deposit';
import Breadcrum from 'src/pages/components/Breadcrum';

const Index = () => {
  return (
    <>
      <Breadcrum title={'Deposit'}/>
        <Deposit />
    </>
  )
}

export default Index
