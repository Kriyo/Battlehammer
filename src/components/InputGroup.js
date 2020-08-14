import React from 'react'
import styled from 'styled-components'
import { Input } from './Input'

export const InputGroup = ({ label, onChange, value = null }) => (
  <Styles.Group>
    <Input required onChange={onChange} value={value} />
    <Styles.Highlight />
    <Styles.Bar />
    <Styles.Label htmlFor={label}>{label}</Styles.Label>
  </Styles.Group>
)

const Styles = {
  Group: styled.div`
    position: relative;
    margin-bottom: 45px;
    > label {
      color: ${(props) => props.theme.placeholderColor};
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
  `,
  Bar: styled.span`
    position: relative;
    display: block;
    width: 300px;
    &:before,
    &:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: ${(props) => props.theme.secondaryColor};
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    &:before {
      left: 50%;
    }
    &:after {
      right: 50%;
    }
  `,
  Highlight: styled.span`
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  `,
  Label: styled.label``,
}
