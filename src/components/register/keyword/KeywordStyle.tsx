import styled from 'styled-components';

export const Keyword = styled.div<{ $isActive: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? 'var(--main-40)' : 'var(--grayscale-5)')};
  color: ${({ $isActive }) => ($isActive ? 'var(--main-0)' : 'var(--grayscale-50)')};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;

  &:hover {
    background: var(--main-50);
    color: var(--main-0);
  }
`;
