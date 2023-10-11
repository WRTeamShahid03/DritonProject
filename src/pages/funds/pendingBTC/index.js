import React from 'react'
import Card from '@mui/material/Card';
import PendingBTC from './PendingBTC';
import Breadcrum from 'src/pages/components/Breadcrum';

const Index = () => {
  return (
    <>
      <Breadcrum title='Deposit Pending'/>

      <Card >
        <PendingBTC />

      </Card>
    </>
  )
}

export default Index
