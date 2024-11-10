import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const Keyword = styled.div<{ $isActive: boolean }>`
  ${FontStyles.SM_SemiBold};
  width: 100%;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? colors.Main40 : colors.Grayscale5)};
  color: ${({ $isActive }) => ($isActive ? colors.Main0 : colors.Grayscale50)};
  cursor: pointer;

  &:hover {
    background: ${colors.Main50};
    color: ${colors.Main0};
  }
`;
