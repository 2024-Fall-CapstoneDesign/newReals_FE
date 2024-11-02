import styled from 'styled-components';

export const Chip = styled.div<{ $isSelected: boolean }>`
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 25rem;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? 'var(--main-50)' : 'none')};
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--main-5)' : 'var(--grayscale-5)')};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 150%;
  color: ${({ $isSelected }) => ($isSelected ? 'var(--main-50)' : 'var(--grayscale-50)')};
`;
