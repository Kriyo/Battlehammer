import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderOne, HeaderThree, NavBar } from '../components'

export const Profile = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  const identity = useIdentityContext()
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
      <HeaderThree>ID: {id}</HeaderThree>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
}