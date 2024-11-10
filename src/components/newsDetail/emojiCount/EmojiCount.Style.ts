import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const Container = styled.div<{ $isActive: boolean }>`
  ${FontStyles.SM_Medium}
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: ${colors.Grayscale5};
  border-radius: 25rem;
  color: ${({ $isActive }) => ($isActive ? colors.Main50 : colors.Grayscale70)};
`;
