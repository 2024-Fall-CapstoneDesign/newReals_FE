import styled from 'styled-components';

export const QuizAnswer = styled.div<{ $color: 'gray' | 'purple' }>`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1.625rem;
  background-color: ${({ $color }) => ($color === 'gray' ? 'var(--grayscale-5)' : 'var(--main-5)')};
  border-radius: 0.5rem;
  color: var(--grayscale-90);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Text = styled.p`
  color: var(--grayscale-90);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  white-space: normal;
  flex: 1;
`;