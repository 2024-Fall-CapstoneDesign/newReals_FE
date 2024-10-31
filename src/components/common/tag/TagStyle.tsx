import styled from 'styled-components';

export const Tag = styled.div<{ $color: 'gray' | 'purple'; $size: 'small' | 'large' }>`
  width: fit-content;
  padding: ${({ $size }) => ($size === 'small' ? '0.25rem 0.5rem' : '0.5rem 0.75rem')};
  border-radius: ${({ $size }) => ($size === 'small' ? '0.5rem' : '0.75rem')};
  background-color: ${({ $color }) =>
    $color === 'gray' ? 'rgba(255, 255, 255, 0.3)' : 'var(--main-5)'};
  color: ${({ $color }) => ($color === 'gray' ? 'var(--main-0)' : 'var(--main-50)')};
  font-size: ${({ $size }) => ($size === 'small' ? '0.875rem' : '1rem')};
  font-weight: 500;
`;
