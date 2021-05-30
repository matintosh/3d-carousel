import tw, { css, styled } from "twin.macro";

// Ship modal
export const StyledModalContainer = styled.div(({ active }) => [
  tw`absolute flex flex-col justify-center items-center text-white`,
  css`
    width: 100vw;
    height: 100vh;

    left: 0;
    top: 0;

    pointer-events: none;
  `,

  active
    ? css`
        background-color: rgba(0, 0, 0, 0.6);
        pointer-events: all;
      `
    : null,
]);

export const StyledModal = styled.div(({ active }) => [
  tw` p-4 `,
  css`
    position: absolute;
    left: 50%;
    top: 50%;

    transition: top 800ms ease-in-out;
    transform: translate(-50%, -50%);

    width: 40%;
    height: 60%;

    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    box-sizing: border-box;

    background: radial-gradient(
      100% 100% at 50% 0%,
      #313335 34.9%,
      #000000 100%
    );

    @media (max-width: 640px) {
      width: 90%;
    }

    @media (max-width: 1138px) {
      width: 80%;
    }
  `,

  !active
    ? css`
        top: -100%;
      `
    : null,
]);

export const StyledCross = styled.img(() => [
  tw`absolute`,
  css`
    width: 25px;
    height: 25px;

    top: 25px;
    right: 25px;

    z-index: 2;
  `,
]);

export const StyledSide = styled.img(() => [
  tw`absolute`,
  css`
    width: 80px;
    height: 80px;

    top: 25px;
    left: 25px;

    z-index: 2;
  `,
]);

export const StyledShip = styled.img(() => [
  tw`absolute`,

  css`
    width: 100%;
    max-height: 200px;

    object-fit: contain;

    top: 80px;

    z-index: 2;
  `,
]);

export const StyledForm = styled.div(() => [
  tw`absolute`,
  css`
    --margin: 12px;
    margin: var(--margin);

    width: calc(100% - var(--margin) * 2);
    height: 240px;

    bottom: 42px;
    left: 0;

    background-color: #757575;

    box-sizing: border-box;
    padding: 21px;
  `,
]);

export const StyledInput = styled.input(() => [
  tw` text-white mb-4`,
  css`
    width: 100%;

    border: none;
    background-color: transparent;
    border-bottom: white 2px solid;

    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    font-weight: bold;
  `,
]);

export const StyledTextArea = styled.textarea(() => [
  tw` text-white`,
  css`
    width: 100%;
    max-height: 160px;

    border: none;
    background-color: transparent;
    border-bottom: white 2px solid;

    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    resize: vertical;
  `,
]);
