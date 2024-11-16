import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';

export const EasySumPart = styled.div`
  width: 100%;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
  border-radius: 0.75rem;
  border: 1px solid ${Colors.Grayscale10};
`;

export const ContentPart = styled.div`
  color: ${Colors.Grayscale90};
  ${FontStyles.SM_Medium}
`;

export const Highlight = styled.span`
  position: relative;
  cursor: pointer;
  color: ${Colors.Main50};
`;

export const WordInfo = styled.div``;

export const Navi = styled.p`
  color: ${Colors.Main50};
  ${FontStyles.SM_SemiBold};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

export const Arrow = styled(RightArrowIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;
