import styled from 'styled-components';
import FontStyles from '../../../styles/Fonts';
import colors from '../../../styles/Colors';

export const Tag = styled.div<{ $color: 'gray' | 'purple'; $size: 'small' | 'large' }>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ $color }) =>
    $color === 'gray' ? 'rgba(255, 255, 255, 0.3)' : colors.Main5};
  color: ${({ $color }) => ($color === 'gray' ? colors.Main0 : colors.Main50)};
  font-size: ${({ $size }) => ($size === 'small' ? FontStyles.XS_Medium : FontStyles.SM_Medium)};
`;
