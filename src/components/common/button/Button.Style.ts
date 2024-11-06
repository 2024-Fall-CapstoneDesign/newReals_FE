import styled from 'styled-components';

export const Button = styled.button<{ $buttonStyle?: 'quiz' | 'modal' }>`
  width: 100%;
  height: ${({ $buttonStyle }) => ($buttonStyle === 'modal' ? '2.75rem' : '2.25rem')};
  padding: ${({ $buttonStyle }) => ($buttonStyle === 'modal' ? '0.75rem' : '0.5rem 0.625rem')};
  background-color: ${({ $buttonStyle }) =>
    $buttonStyle === 'quiz' ? 'var(--main-5)' : 'var(--main-40)'};
  border-radius: 0.5rem;
  border: none;
  color: ${({ $buttonStyle }) => ($buttonStyle === 'quiz' ? 'var(--main-40)' : 'var(--main-0)')};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;

  &:hover {
    background-color: ${(props) =>
      props.$buttonStyle === 'quiz' ? 'var(--main-10)' : 'var(--main-50)'};
  }
`;
