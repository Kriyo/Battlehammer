import styled from "styled-components";

const primaryYellow = "#FFD803";
const primaryBlue = "#272343";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${primaryYellow};
  border: none;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 2px solid ${primaryBlue};
  color: ${primaryBlue};
`;

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: ${primaryBlue};
`;

export default PrimaryButton;
