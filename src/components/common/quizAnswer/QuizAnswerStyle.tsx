import styled from 'styled-components';

export const QuizAnswer = styled.div<{ $color: 'gray' | 'purple' }>`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1.625rem;
  background-color: ${({ $color }) => ($color === 'gray' ? 'var(--grayscale-5)' : 'var(--main-5)')};
  border-radius: 0.75rem;
  color: var(--grayscale-90);
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
`;

export const AnswerContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Text = styled.p`
  color: var(--grayscale-90);
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  white-space: normal;
  flex: 1;
`;
