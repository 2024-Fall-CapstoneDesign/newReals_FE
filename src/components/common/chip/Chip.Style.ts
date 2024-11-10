import styled from 'styled-components';
import Colors from '../../../styles/Colors';
import FontStyles from '../../../styles/FontStyle';

export const Chip = styled.div<{ $isSelected: boolean }>`
  ${FontStyles.SM_Regular}
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 25rem;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? Colors.Main50 : 'none')};
  background-color: ${({ $isSelected }) => ($isSelected ? Colors.Main5 : Colors.Grayscale5)};
  color: ${({ $isSelected }) => ($isSelected ? Colors.Main50 : Colors.Grayscale50)};
`;
