import styled from 'styled-components';
import FontStyles from '../../../styles/Fonts';
import colors from '../../../styles/Colors';

export const PageNation = styled.div`
  ${FontStyles.SM_SemiBold}
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
`;

export const PageNumber = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 25rem;
  background-color: ${({ $isActive }) => ($isActive ? colors.Main50 : colors.Main0)};
  color: ${({ $isActive }) => ($isActive ? colors.Main0 : colors.Grayscale90)};
  cursor: pointer;
`;
