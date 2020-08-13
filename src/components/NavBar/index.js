import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Home, Book, Moon, Sun } from 'react-feather'
import { HammerIcon } from '../../assets/hammer'
import { darkTheme, defaultTheme } from '../../utils'

export const NavBar = ({ darkMode, modeType, swapTheme }) => {
  const [openDrawer, toggleDrawer] = useState(false)
  const drawerRef = useRef(null)
  const iconColor = darkMode ? darkTheme.buttonText : defaultTheme.buttonText
  const modeIcon = darkMode ? (
    <Sun color={iconColor} size={16} />
  ) : (
    <Moon color={iconColor} size={16} />
  )
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
      <Navbar.Wrapper>
        <Navbar.Logo>
          <HammerIcon fill={iconColor} />
        </Navbar.Logo>
        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item className="active">
            <Home color={iconColor} size={16} />
            &nbsp;
            <Link to="/home">Home</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Book color={iconColor} size={16} />
            &nbsp;
            <Link to="/objectives">Objectives</Link>
          </Navbar.Item>
          <Navbar.Item>
            {modeIcon}&nbsp;
            <a onClick={swapTheme} href="void:0">
              {modeType}
            </a>
          </Navbar.Item>
        </Navbar.Items>
      </Navbar.Wrapper>
    </Styles.Wrapper>
  )
}

const Styles = {
  Wrapper: styled.main``,
}

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.navBarColor};
    
    @media only screen and (max-width: 40em) {
      background-color: transparent;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.buttonText};

    &.active {
      color: ${(props) => props.theme.primaryColor};
    }

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }

    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
    }
    
  `,
  Logo: styled.svg`
    padding: 0.5rem 1rem;
    color: white;
    height: 50px;
    width: auto;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;
      width: 170px;
      height: 100%;
      margin-top: 0;
      flex-direction: column;
      background-color: ${(props) => props.theme.sideBarColor};
      padding: 1rem 2rem;
      transition: 0.2s ease-out;
      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    display: flex;
    padding: 0 1rem;
    cursor: pointer;
    font-weight: bold;

    &.active {
      border-bottom: 3px solid ${(props) => props.theme.primaryColor};
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.primaryColor};
      }
    }

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
      display: block;
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
      background-color: ${(props) => props.theme.buttonText};
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
