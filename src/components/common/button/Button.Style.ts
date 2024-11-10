import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Button = styled.button<{ $buttonStyle?: 'quiz' | 'modal' }>`
  ${FontStyles.SM_Medium}
  width: 100%;
  height: ${({ $buttonStyle }) => ($buttonStyle === 'modal' ? '2.75rem' : '2.25rem')};
  padding: ${({ $buttonStyle }) => ($buttonStyle === 'modal' ? '0.75rem' : '0.5rem 0.625rem')};
  background-color: ${({ $buttonStyle }) =>
    $buttonStyle === 'quiz' ? Colors.Main5 : Colors.Main40};
  border-radius: 0.5rem;
  border: none;
  color: ${({ $buttonStyle }) => ($buttonStyle === 'quiz' ? Colors.Main40 : Colors.Main0)};
  line-height: 150%;

  &:hover {
    background-color: ${(props) => (props.$buttonStyle === 'quiz' ? Colors.Main10 : Colors.Main50)};
  }
`;
