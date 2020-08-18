import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { Redirect } from 'react-router-dom'
import { HeaderOne, PrimaryButton } from '../components'

export const RouteLogin = ({ showModal }) => {
  const identity = useIdentityContext()

  if (identity && identity.isLoggedIn) {
    console.log('::> user is logged in')
    return <Redirect to="/dashboard" />
  }
  return (
    <div>
      <HeaderOne>Log In or Sign Up</HeaderOne>
      <PrimaryButton onClick={showModal}>Log in</PrimaryButton>
    </div>
  )
}
