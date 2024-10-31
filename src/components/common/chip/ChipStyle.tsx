import styled from 'styled-components';

export const Chip = styled.div<{ $isSelected: boolean }>`
  width: fit-content;
  padding: 0.5rem 1.25rem;
  border-radius: 25rem;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? 'var(--main-50)' : 'none')};
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--main-5)' : 'var(--grayscale-5)')};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ $isSelected }) => ($isSelected ? 'var(--main-50)' : 'var(--grayscale-50)')};
`;
