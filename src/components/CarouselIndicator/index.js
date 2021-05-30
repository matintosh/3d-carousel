import { useMemo } from "react";
import { StyledIndicator, StyledIndicatorContainer } from "./Styles";

export default function Indicator({ length, current, inverted = false }) {
  const calculatedCurrent = useMemo(
    () => (inverted ? (current === 0 ? current : length - current) : current),
    [length, current, inverted]
  );

  return (
    <StyledIndicatorContainer>
      {Array.from(Array(length).keys()).map((i, idx) => (
        <StyledIndicator key={`indicator-${idx}`} active={idx === calculatedCurrent} />
      ))}
    </StyledIndicatorContainer>
  );
}
