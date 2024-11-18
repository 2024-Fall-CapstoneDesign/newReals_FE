import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

const backgroundColors = {
  gray: 'rgba(255, 255, 255, 0.3)',
  gray_thinking: Colors.Grayscale5,
  purple: Colors.Main5,
  red: 'rgba(255, 239, 244, 1)',
};

const textColors = {
  gray: Colors.Main0,
  gray_thinking: Colors.Grayscale50,
  purple: Colors.Main50,
  red: 'rgba(255, 117, 160, 1)',
};

export const Tag = styled.div<{
  $color: 'gray' | 'purple' | 'red' | 'gray_thinking';
  $size: 'small' | 'large';
}>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ $color }) => backgroundColors[$color || 'purple']};
  color: ${({ $color }) => textColors[$color || 'purple']};
  font-size: ${({ $size }) => ($size === 'small' ? FontStyles.XS_Medium : FontStyles.SM_Medium)};
`;
