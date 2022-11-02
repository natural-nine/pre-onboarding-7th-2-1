import React from "react";
import styled from "styled-components";

const AutomobileList = ({ carList, menuList }) => {
  console.log(carList);
  return (
    <>
      {carList?.map((i, idx) => (
        <CarBox key={i.id}>
          <DesBox>
            <div>
              <p>{i.attribute.brand}</p>
              <p>{i.attribute.name}</p>
            </div>
            <div>
              <span>
                {i.attribute.segment} / {i.attribute.fuelType}
              </span>
              <span></span>
            </div>
          </DesBox>
          <ImgBox></ImgBox>
        </CarBox>
      ))}
    </>
  );
};

const CarBox = styled.div`
  width: 100%;
  height: 120px;
  padding: 20px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DesBox = styled.div`
  width: 38%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  div:first-child {
    margin-bottom: 10px;
  }
`;

const ImgBox = styled.div`
  width: 38%;
  height: 100%;
  border: 1px solid red;
`;

export default AutomobileList;
