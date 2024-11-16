import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

const backgroundColors = {
  quiz: Colors.Main5,
  modal: Colors.Main40,
  profile: Colors.Grayscale10,
};

const textColors = {
  quiz: Colors.Main40,
  modal: Colors.Main0,
  profile: Colors.Grayscale70,
};

const hoverBackgroundColors = {
  quiz: Colors.Main10,
  modal: Colors.Main50,
  profile: Colors.Grayscale20,
};

export const Button = styled.button<{ $buttonStyle?: 'quiz' | 'modal' | 'profile' }>`
  ${FontStyles.SM_Medium}
  width: 100%;
  height: ${({ $buttonStyle }) =>
    $buttonStyle === 'modal' || $buttonStyle === 'profile' ? '2.75rem' : '2.25rem'};
  padding: ${({ $buttonStyle }) =>
    $buttonStyle === 'modal' || $buttonStyle === 'profile' ? '0.75rem' : '0.5rem 0.625rem'};
  background-color: ${({ $buttonStyle }) => backgroundColors[$buttonStyle || 'modal']};
  color: ${({ $buttonStyle }) => textColors[$buttonStyle || 'modal']};
  border-radius: 0.5rem;
  border: none;
  line-height: 150%;

  &:hover {
    background-color: ${({ $buttonStyle }) => hoverBackgroundColors[$buttonStyle || 'modal']};
  }
`;
