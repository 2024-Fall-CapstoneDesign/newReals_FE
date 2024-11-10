import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 6.25rem;
  gap: 2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.375rem;
  line-height: 150%;
`;

export const Title = styled.span`
  color: var(--grayscale-90);
  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.p`
  color: var(--grayscale-50);
  font-size: 16px;
  font-weight: 500;
`;
