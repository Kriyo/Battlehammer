import React, { useState } from "react";
import styles from "./styles.css";

import { Input } from "../../components";

export const InputGroup = ({ label }) => (
  <div class='group'>
    <Input type='text' required />
    <span class='highlight'></span>
    <span class='bar'></span>
    <label>{label}</label>
  </div>
);
