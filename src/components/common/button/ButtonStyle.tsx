import styled from 'styled-components';

export const Button = styled.button<{ $type?: 'quiz' | 'modal' }>`
  width: 100%;
  height: ${({ $type }) => ($type === 'modal' ? '2.75rem' : '2.25rem')};
  padding: ${({ $type }) => ($type === 'modal' ? '0.75rem' : '0.5rem 0.625rem')};
  background-color: ${({ $type }) => ($type === 'quiz' ? 'var(--main-5)' : 'var(--main-40)')};
  border-radius: 0.5rem;
  border: none;
  color: ${({ $type }) => ($type === 'quiz' ? 'var(--main-40)' : 'var(--main-0)')};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;

  &:hover {
    background-color: ${(props) => (props.$type === 'quiz' ? 'var(--main-10)' : 'var(--main-50)')};
  }
`;
