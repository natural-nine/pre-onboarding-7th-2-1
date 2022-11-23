import React from "react";
import styled from "styled-components";
import { dateChange, fuelChange, segmentChange } from "../shared/shared";
import { CarDetailTypes } from "../types/carTypes";

const AutomobileDetail = ({ carDetail }: { carDetail: CarDetailTypes }) => {
  return (
    <>
      <ImgBox>
        <img src={carDetail.attribute.imageUrl} alt="carImage" />
      </ImgBox>
      <TitleBox>
        <p>{carDetail.attribute.brand}</p>
        <p>{carDetail.attribute.name}</p>
      </TitleBox>
      <PriceBox>
        <span>월 {carDetail.amount.toLocaleString()} 원</span>
      </PriceBox>
      <EtcBox>
        <span>차량 정보</span>
      </EtcBox>
      <DesBox>
        <p>차종</p>
        <span>{segmentChange(carDetail.attribute.segment)}</span>
      </DesBox>
      <DesBox>
        <p>연료</p>
        <span>{fuelChange(carDetail.attribute.fuelType)}</span>
      </DesBox>
      <DesBox>
        <p>이용 가능일</p>
        <span>{dateChange(carDetail.startDate)}</span>
      </DesBox>
      <EtcBox>
        <span>보험</span>
      </EtcBox>
      {carDetail.insurance.map((i, idx) => (
        <DesBox key={idx}>
          <p>{i.name}</p>
          <span>{i.description}</span>
        </DesBox>
      ))}
      {carDetail.additionalProducts?.length === 0 ? (
        <React.Fragment />
      ) : (
        <>
          <EtcBox>
            <span>추가상품</span>
          </EtcBox>
          {carDetail.additionalProducts?.map((i, idx) => (
            <DesBox key={idx}>
              <p>{i.name}</p>
              <span>월 {i.amount.toLocaleString()} 원</span>
            </DesBox>
          ))}
        </>
      )}
    </>
  );
};

const ImgBox = styled.div`
  width: 100%;
  height: 205px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 92px;
  padding: 20px;
  p {
    font-weight: 700;
    font-size: 2rem;
  }
`;

const PriceBox = styled.div`
  width: 100%;
  height: 48px;
  padding: 13px 21px 14px 21px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    font-size: 1.7rem;
  }
`;

const EtcBox = styled.div`
  width: 100%;
  height: 48px;
  background-color: #0094ff;
  padding: 13px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const DesBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  p {
    font-weight: 500;
    font-size: 1.5rem;
  }
  span {
    font-size: 1.3rem;
  }
`;

export default AutomobileDetail;
