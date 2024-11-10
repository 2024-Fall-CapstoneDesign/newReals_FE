import styled from 'styled-components';
import Colors from '../../../styles/Colors';
import FontStyles from '../../../styles/FontStyles';

export const ErrorMessage = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
  color: ${Colors.Red};
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const Text = styled.p<{ $isError: boolean }>`
  ${FontStyles.SM_Medium};
  color: ${({ $isError }) => ($isError ? Colors.Red : Colors.Grayscale50)};
`;
