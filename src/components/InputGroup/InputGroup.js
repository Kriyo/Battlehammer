import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

import { Input } from '../Input'

export const InputGroup = ({ label }) => (
  <div className="group">
    <Input type="text" required />
    <span className="highlight" />
    <span className="bar" />
    <label htmlFor={label}>{label}</label>
  </div>
)
