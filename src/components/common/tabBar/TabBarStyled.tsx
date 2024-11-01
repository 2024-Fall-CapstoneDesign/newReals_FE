import styled from 'styled-components';

export const TabBar = styled.div`
  display: flex;
  width: 100%;
`;

export const TabItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px auto;
  width: 100%;
  height: 3.75rem;
  border-right: 1px solid var(--grayscale-10);
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--main-40)' : 'var(--grayscale-5)')};
  color: ${({ $isSelected }) => ($isSelected ? 'var(--main-0)' : 'var(--grayscale-50)')};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;

  &:first-child {
    border-radius: 0.75rem 0rem 0rem 0.75rem;
  }

  &:last-child {
    border-radius: 0rem 0.75rem 0.75rem 0rem;
  }
`;
