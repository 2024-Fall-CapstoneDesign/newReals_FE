import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--grayscale-90);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 150%;
`;

export const HelperText = styled.p`
  color: var(--main-50);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
`;

export const Description = styled.p`
  color: var(--grayscale-50);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%;
`;
