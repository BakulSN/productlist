import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 5px solid #b5e3e7;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  min-width: 600px;
  margin-top: 35px;
  box-shadow: 0px 0px 10px #cb61b6;
  word-break: break-all;
  white-space: normal;
  justify-content: space-around;

  button {
    white-space: nowrap;
  }
`;
export const ImageWrapperCard = styled.div`
  flex: 0 0 130px;
  height: 200px;
  display: flex;
  align-items: center;
`;
export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;
export const ContentCard = styled.div`
  flex: 1;
`;

export const PriceCard = styled.p`
  text-align: right;
  font-weight: bold;
  border-bottom: 2px solid #cb61b6;
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
