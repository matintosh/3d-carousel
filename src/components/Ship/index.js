import { useContext } from "react";
import { ShipsAppContext } from "../../context";
import {
  StyledContainer,
  StyledShip,
  StyledSign,
  StyledDescription,
  StyledTitle,
  StyledShadow,
  StyledButton,
  StyledPencil,
} from "./Styles";

const defaults = {
  active: false,
  image: "/images/ship_1.png",
  sign: "/images/empire.png",
  title: "TIE Fighter Concept",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export default function Ship({
  active = defaults.image,
  image = defaults.image,
  sign = defaults.sign,
  title = defaults.title,
  description = defaults.description,
}) {
  const { editShips } = useContext(ShipsAppContext);
  
  return (
    <StyledContainer active={active}>
      <StyledShip active={active} src={image} />
      <StyledSign src={`/images/${sign}.png`} />
      <StyledDescription>
        <StyledTitle>{title}</StyledTitle>
        {description}
        <StyledShadow />
      </StyledDescription>
      {active && (
        <StyledButton onClick={editShips}>
          Edit
          <StyledPencil>✎</StyledPencil>
        </StyledButton>
      )}
    </StyledContainer>
  );
}
