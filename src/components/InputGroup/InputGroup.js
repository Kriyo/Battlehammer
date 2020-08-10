import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

import { Input } from '../Input'

export const InputGroup = ({ label, onChange }) => (
  <div className="group">
    <Input type="text" required onChange={onChange} />
    <span className="highlight" />
    <span className="bar" />
    <label htmlFor={label}>{label}</label>
  </div>
)
