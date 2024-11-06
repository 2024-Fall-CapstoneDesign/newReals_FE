import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SubCategory = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--grayscale-90);
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
`;

export const Total = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
  color: var(--grayscale-50);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;
