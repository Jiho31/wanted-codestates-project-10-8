import React from 'react';
import styled from 'styled-components';

const ForestCard = React.forwardRef(
  ({ dataObj, setModalOpen, setSelectList }, ref) => {
    const { fcNm, fcAddr, ref1, memo } = dataObj;
    const clickHandler = () => {
      setModalOpen(true);
      setSelectList({ fcNm, fcAddr, ref1, memo });
    };
    return (
      <Card ref={ref} onClick={clickHandler}>
        <h3>{fcNm}</h3>
        <div>📍 {fcAddr}</div>
        <div>📞 {ref1}</div>
        <div>{memo && memo}</div>
      </Card>
    );
  },
);

const Card = styled.article`
  width: 362px;
  height: auto;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 17px;
  background: rgba(255, 255, 255, 0.2);

  margin-top: 10px;
  h3 {
    font-size: 20px;
    font-weight: bold;
    line-height: 22px;
    margin-bottom: 20px;
  }
  div {
    font-size: 16px;
    line-height: 18px;
  }
  .forest-data {
    margin-bottom: 20px;
  }
  .forest-data:last-child {
    margin: 0;
  }
`;
export default ForestCard;
