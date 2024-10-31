import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 33.3125rem;
  padding: 1.5rem;
  background-color: var(--grayscale-5);
  border-radius: 1rem;
  color: var(--black);
  gap: 0.75rem;
`;

export const Quiz = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%;
`;

export const Q = styled.span`
  color: var(--main-50);
  line-height: 150%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background-color: var(--main-0);
  border-radius: 0.75rem;
  gap: 1rem;
`;

export const Text = styled.p`
  opacity: 0.68;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
