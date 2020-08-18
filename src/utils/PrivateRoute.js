import React from 'react'
import { Redirect } from 'react-router-dom'
import { useIdentityContext } from 'react-netlify-identity'

// This component is used as a middleware auth check on the component level.
// Usage is to just pass it a component and the intended route path.
export const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn

  // This handles both private guarding "logged-in" views and people routing to /profile without a GUID.
  if (
    (!isLoggedIn && location.pathname !== '/home') ||
    location.pathname === '/profile'
  ) {
    return <Redirect path="/home" />
  }

  return <Component {...rest} />
}
