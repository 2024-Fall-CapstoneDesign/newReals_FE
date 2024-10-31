import styled from 'styled-components';

export const Container = styled.div<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--grayscale-5);
  border-radius: 25rem;
  color: ${({ $isActive }) => ($isActive ? 'var(--main-50)' : 'var(--grayscale-70)')};
  font-size: 1.125rem;
  font-weight: 500;
`;
