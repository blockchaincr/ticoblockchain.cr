import React, { useState } from 'react'

import { MainContainer } from 'containers'

import MainPage from '../MainPage'

const Dashboard = () => {
  const [useBackdrop] = useState(false)

  return (
    <MainContainer>
      <MainPage useBackdrop={useBackdrop} />
    </MainContainer>
  )
}

export default Dashboard
