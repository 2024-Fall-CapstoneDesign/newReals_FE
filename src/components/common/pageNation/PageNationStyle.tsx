import styled from 'styled-components';

export const PageNation = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 150%;
  margin-top: 1rem;
`;

export const PageNumber = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 25rem;
  background-color: ${({ $isActive }) => ($isActive ? 'var(--main-50)' : 'var(main-0)')};
  color: ${({ $isActive }) => ($isActive ? 'var(--main-0)' : 'var(grayscale-90)')};
  cursor: pointer;
`;
