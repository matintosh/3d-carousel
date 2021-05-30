import { StyledButtonsContainer, StyledController } from "./Styles";

export default function Controllers({ current, onChange }) {
  return (
    <StyledButtonsContainer>
      <StyledController onClick={() => onChange(current + 1)}>
        <img src="/images/arrows/left.png" />
      </StyledController>
      <StyledController onClick={() => onChange(current - 1)}>
        <img src="/images/arrows/right.png" />
      </StyledController>
    </StyledButtonsContainer>
  );
}
