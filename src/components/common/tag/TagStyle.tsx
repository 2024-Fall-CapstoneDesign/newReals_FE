import styled from 'styled-components';

export const Tag = styled.div<{ $color: 'gray' | 'purple'; $size: 'small' | 'large' }>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ $color }) =>
    $color === 'gray' ? 'rgba(255, 255, 255, 0.3)' : 'var(--main-5)'};
  color: ${({ $color }) => ($color === 'gray' ? 'var(--main-0)' : 'var(--main-50)')};
  font-size: ${({ $size }) => ($size === 'small' ? '0.75rem' : '0.875rem')};
  font-weight: 500;
  line-height: 150%;
`;
