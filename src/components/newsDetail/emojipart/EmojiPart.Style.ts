import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const EmojiClickPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  color: ${Colors.Grayscale90};
  ${FontStyles.MD1_SemiBold};
  align-self: stretch;
`;

export const MainPart = styled.div``;

export const ClickPart = styled.div`
  justify-content: center;
  display: flex;
  gap: 8.875rem;
`;