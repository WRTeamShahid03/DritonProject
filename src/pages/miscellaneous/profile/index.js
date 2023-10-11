import React from 'react'
import Profile from './Profile';
import Breadcrum from 'src/pages/components/Breadcrum';

const Index = () => {
  return (
    <>
       <Breadcrum title="Profile" />
        <Profile />
    </>
  )
}

export default Index
