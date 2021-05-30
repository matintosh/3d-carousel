import tw, { styled, css } from "twin.macro";

export const StyledContainer = styled.div(() => [
  css`
    width: 100%;
    height: 100vh;
    background: radial-gradient(100% 100% at 50% 100%, #000000 0%, #313335 100%),
      #313335;
  `,
]);
