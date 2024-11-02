import styled from 'styled-components';

export const ErrorMessage = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--red);
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const Text = styled.p<{ $isError: boolean }>`
  color: ${({ $isError }) => ($isError ? 'var(--red)' : 'var(--grayscale-50)')};
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 150%;
`;
