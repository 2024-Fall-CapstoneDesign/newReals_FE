import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const Chip = styled.div<{ $isSelected: boolean }>`
  ${FontStyles.SM_Regular}
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 25rem;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? colors.Main50 : 'none')};
  background-color: ${({ $isSelected }) => ($isSelected ? colors.Main5 : colors.Grayscale5)};
  color: ${({ $isSelected }) => ($isSelected ? colors.Main50 : colors.Grayscale50)};
`;
