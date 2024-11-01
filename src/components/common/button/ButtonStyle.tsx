import styled from 'styled-components';

export const Button = styled.button<{ $type?: 'quiz' | 'page' }>`
  width: 100%;
  height: 3rem;
  background-color: ${(props) => (props.$type === 'quiz' ? 'var(--main-5)' : 'var(--main-40)')};
  border-radius: 0.75rem;
  border: none;
  color: ${(props) => (props.$type === 'quiz' ? 'var(--main-40)' : 'var(--main-0)')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;

  &:hover {
    background-color: ${(props) => (props.$type === 'quiz' ? 'var(--main-10)' : 'var(--main-50)')};
  }
`;
