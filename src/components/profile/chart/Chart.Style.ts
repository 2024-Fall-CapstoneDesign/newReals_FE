import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const ChartContainer = styled.div`
  position: relative;
  width: 9.5rem;
  height: 9.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterText = styled.div`
  ${FontStyles.SM_SemiBold}
  position: absolute;
  color: ${Colors.Main60};
`;
