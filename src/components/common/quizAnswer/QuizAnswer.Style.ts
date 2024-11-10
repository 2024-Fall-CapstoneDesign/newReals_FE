import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const QuizAnswer = styled.div<{ $color: 'gray' | 'purple' }>`
  ${FontStyles.SM_Medium}
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1.625rem;
  background-color: ${({ $color }) => ($color === 'gray' ? colors.Grayscale5 : colors.Main5)};
  border-radius: 0.5rem;
  color: ${colors.Grayscale90};
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Text = styled.p`
  ${FontStyles.SM_Medium}
  color: ${colors.Grayscale90};
  white-space: normal;
  flex: 1;
`;
