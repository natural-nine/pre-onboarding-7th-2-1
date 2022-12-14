import styled from "styled-components";
import { fuelChange, segmentChange } from "../shared/shared";
import { CarListTypes } from "../types/carTypes";

const AutomobileList = ({ carsList, detailClick }: CarListTypes) => {
  return (
    <>
      {carsList.map(i => (
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
                {segmentChange(i.attribute.segment)} /{" "}
                {fuelChange(i.attribute.fuelType)}
              </span>
              <span>μ {i.amount.toLocaleString()} μ λΆν°</span>
            </div>
          </DesBox>
          <ImgBox>
            <img src={i.attribute.imageUrl} alt="carImage" />
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
      font-size: 1.7rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 1.4rem;
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
