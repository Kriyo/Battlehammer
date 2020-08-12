import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

import { Input } from '../Input'

export const InputGroup = ({ label, onChange, value = null }) => (
  <div className="group">
    <Input type="text" required onChange={onChange} value={value} />
    <span className="highlight" />
    <span className="bar" />
    <label htmlFor={label}>{label}</label>
  </div>
)
