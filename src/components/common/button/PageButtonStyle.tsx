import styled from 'styled-components';

export const PageButton = styled.button<{ $type: 'left' | 'right' }>`
  width: 100%;
  max-width: 12.5rem;
  height: 3rem;
  padding: 0.75rem;
  display: flex;
  background-color: var(--grayscale-5);
  border-radius: 0.75rem;
  border: none;
  color: var(--grayscale-70);
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;

  &:hover {
    color: var(--main-0);
    background-color: var(--grayscale-20);
  }

  justify-content: ${({ $type }) => ($type === 'right' ? 'space-between' : 'flex-start')};
  gap: ${({ $type }) => ($type === 'left' ? '0.75rem' : '0')};
`;
