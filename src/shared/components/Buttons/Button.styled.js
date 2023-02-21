import styled from 'styled-components';

export const BtnSubmit = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 50px;
  padding: 0;
  font-size: 16px;
  background-color: #1d2127;
  border: 0;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  transition: hover 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #b2101e;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 30px;
  border: 0;
  background-color: #1d2127;

  &:hover {
    background-color: #153e49;
  }
`;
