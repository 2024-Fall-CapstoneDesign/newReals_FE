import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const ErrorMessage = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
  color: ${colors.Red};
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const Text = styled.p<{ $isError: boolean }>`
  ${FontStyles.SM_Medium};
  color: ${({ $isError }) => ($isError ? colors.Red : colors.Grayscale50)};
`;
