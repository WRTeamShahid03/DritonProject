import React from 'react'
import Profile from './Profile';
import Breadcrum from 'src/pages/components/Breadcrum';

const index = () => {
  return (
    <>
       <Breadcrum title="Profile" />
        <Profile />
    </>
  )
}

export default index
