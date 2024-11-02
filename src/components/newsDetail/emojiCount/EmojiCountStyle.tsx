import styled from 'styled-components';

export const Container = styled.div<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: var(--grayscale-5);
  border-radius: 25rem;
  color: ${({ $isActive }) => ($isActive ? 'var(--main-50)' : 'var(--grayscale-70)')};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
`;
