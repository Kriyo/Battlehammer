import React from 'react'
import { Redirect } from 'react-router-dom'
import { useIdentityContext } from 'react-netlify-identity'

export const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn()

  if (!isLoggedIn && location.pathname !== '/home') {
    return <Redirect path="/home" />
  }

  return <Component {...rest} />
}
