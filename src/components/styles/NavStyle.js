import styled from "styled-components";

const NavStyle = styled.ul`
  display: grid;
  grid-gap: 20px;
  margin: 20px 0 20px 0;
  padding-right: 20px;
  grid-template-columns: 1fr auto auto auto auto;
  border-top: 2px solid ${props => props.theme.black};
  border-bottom: 2px solid ${props => props.theme.black};
  button {
    color: ${(props) => props.theme.white};
    font-size: 30px;
    text-transform: uppercase;
    background: none;
    height: 100px;
    border: 0;
    cursor: pointer;
        background: ${props => props.theme.black}
    transform: skew(-20deg);
    &:before {
      content: "";
      width: 2px;
      height: 100%;
      left: 0;
      background: ${props => props.theme.black};
      position: absolute;
      top: 0;
      bottom: 0;
    }    
    &:after {
      content: "";
      width: 2px;
      height: 100%;
      right: 0;
      background: ${props => props.theme.black};
      position: absolute;
      top: 0;
      bottom: 0;
    }
    &:hover {
        background: black;

    }
  }
`;

export default NavStyle