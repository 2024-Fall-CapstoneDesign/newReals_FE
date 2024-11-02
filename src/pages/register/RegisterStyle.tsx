import styled from 'styled-components';

export const Cotnainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 8.5rem 7.5rem;
  gap: 5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;
