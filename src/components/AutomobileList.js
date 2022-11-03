import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AutomobileList = ({ carList, menuList }) => {
  const navagate = useNavigate();
  console.log(carList.carsList);
  const detailClick = car => {
    navagate("/detail", {
      state: car,
    });
  };
  return (
    <>
      {carList.carsList.map((i, idx) => (
        <CarBox
          onClick={() => {
            detailClick(i);
          }}
          key={i.id}
        >
          <DesBox>
            <div>
              <p>{i.attribute.brand}</p>
              <p>{i.attribute.name}</p>
            </div>
            <div>
              <span>
                {i.attribute.segment} / {i.attribute.fuelType}
              </span>
              <span>월 {i.amount.toLocaleString()} 원 부터</span>
            </div>
          </DesBox>
          <ImgBox>
            <img src={i.attribute.imageUrl} />
          </ImgBox>
        </CarBox>
      ))}
    </>
  );
};

const CarBox = styled.div`
  width: 100%;
  height: 125px;
  padding: 20px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DesBox = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  div:first-child {
    margin-bottom: 10px;
    p {
      font-weight: 700;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 0.9rem;
    }
  }
`;

const ImgBox = styled.div`
  width: 38%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default AutomobileList;
