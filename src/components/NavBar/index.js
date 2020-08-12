import React, { useState, useEffect, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = (props) => {
  console.log('::> nav props: ', props)
  const [openDrawer, toggleDrawer] = useState(false)
  const drawerRef = useRef(null)

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return
      }

      toggleDrawer(false)
    }

    document.addEventListener('mousedown', closeDrawer)
    return () => document.removeEventListener('mousedown', closeDrawer)
  }, [])

  return (
    <Styles.Wrapper>
      {/* <CSSReset /> */}

      <Navbar.Wrapper>
        <Navbar.Logo>Logo</Navbar.Logo>

        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item>
            <Link to="/home">Home</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/objectives">Objectives</Link>
          </Navbar.Item>
          <Navbar.Item>Toggle Mode</Navbar.Item>
        </Navbar.Items>
      </Navbar.Wrapper>
    </Styles.Wrapper>
  )
}

const Styles = {
  Wrapper: styled.main``,
}

// display: flex;
//     background-color: #eeeeee;
//     height: 100vh;

//    background: ${(props) => (props.path === '/home' ? 'none' : 'white')};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${(props) => {
      console.log('::> style prop: ', props)
      return props.path === '/home' ? 'none' : 'white'
    }};
    color: black;

    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      top: 0;
    }
  `,
  Logo: styled.h4`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;

      height: 100%;

      flex-direction: column;

      background-color: black;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
    }
  `,
}

const HamburgerButton = {
  Wrapper: styled.button`
    height: 2rem;
    width: 2rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: '';
      width: 100%;
      background-color: white;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
}
