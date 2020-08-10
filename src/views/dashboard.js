import React, { useState } from "react";

import { InputGroup } from "../components";
export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard View</h1>

      <InputGroup label='Player 1' />
      <InputGroup label='Player 2' />
    </div>
  );
};
