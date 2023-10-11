import React from 'react'
import PendingCrypto from './PendingCrypto';
import Breadcrum from 'src/pages/components/Breadcrum';

const Index = () => {
  return (
    <>
      <Breadcrum title={' Other Crypto Payments'}/>

        <PendingCrypto />
    </>
  )
}

export default Index
