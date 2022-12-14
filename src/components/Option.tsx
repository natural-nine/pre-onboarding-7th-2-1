import styled from "styled-components";
import { OptionsTypes } from "../types/menuTypes";

const Option = ({ menuList, menuToggleClick }: OptionsTypes) => {
  return (
    <Wrap>
      {menuList.map(i => (
        <OptionBox
          key={i.id}
          props={i.isMenu}
          onClick={() => menuToggleClick(i.id, i.value)}
        >
          <p> {i.title}</p>
        </OptionBox>
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 39px;
  border-bottom: 1px solid black;
  padding: 11px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const OptionBox = styled.div<{ props: boolean }>`
  width: 17%;
  height: 27px;
  border-radius: 62px;
  background-color: #d9d9d9;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
    color: ${props => props.props && "white"};
  }
  background-color: ${props => props.props && "black"};
  cursor: pointer;
`;

export default Option;
