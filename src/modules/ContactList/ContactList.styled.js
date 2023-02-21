import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  color: #fff;
`;
