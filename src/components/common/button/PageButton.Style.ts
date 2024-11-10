import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const PageButton = styled.button<{ $buttonStyle: 'left' | 'right' }>`
  ${FontStyles.SM_Medium}
  width: 100%;
  max-width: 12.5rem;
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  background-color: ${colors.Grayscale5};
  border-radius: 0.5rem;
  border: none;
  color: ${colors.Grayscale70};

  &:hover {
    color: ${colors.Main0};
    background-color: ${colors.Grayscale20};
  }

  justify-content: ${({ $buttonStyle }) =>
    $buttonStyle === 'right' ? 'space-between' : 'flex-start'};
  gap: ${({ $buttonStyle }) => ($buttonStyle === 'left' ? '0.75rem' : '0')};
`;
