import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderOne, NavBar } from '../components'

export const Profile = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  const identity = useIdentityContext()
  console.log('::> identity:', identity)
  const { id } = useParams()
  const { full_name: fullName } = identity.user.user_metadata

  return (
    <Styles.Wrap>
      <NavBar
        darkMode={darkMode}
        location={location}
        modeType={modeType}
        showModal={showModal}
        swapTheme={swapTheme}
      />
      <HeaderOne>Profile for {fullName}</HeaderOne>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
}
