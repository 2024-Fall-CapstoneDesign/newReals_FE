import styled from 'styled-components';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';
import { Colors, FontStyles } from '../../../styles';

export const Cartoon = styled.div`
  max-width: 91rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.375rem;
`;

export const Title = styled.span`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_Bold}
`;

export const DescrtionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  ${FontStyles.MD2_Medium}
  color: ${Colors.Grayscale50};
`;

export const GoNews = styled.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Icon = styled(RightArrowIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${Colors.Grayscale70};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 24%;
  height: 15.75rem;
`;
