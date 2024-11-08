import styled from 'styled-components';

export const PageButton = styled.button<{ $buttonStyle: 'left' | 'right' }>`
  width: 100%;
  max-width: 12.5rem;
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  background-color: var(--grayscale-5);
  border-radius: 0.5rem;
  border: none;
  color: var(--grayscale-70);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;

  &:hover {
    color: var(--main-0);
    background-color: var(--grayscale-20);
  }

  justify-content: ${({ $buttonStyle }) =>
    $buttonStyle === 'right' ? 'space-between' : 'flex-start'};
  gap: ${({ $buttonStyle }) => ($buttonStyle === 'left' ? '0.75rem' : '0')};
`;