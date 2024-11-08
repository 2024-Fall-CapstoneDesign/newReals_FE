import styled from 'styled-components';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';

export const Cartoon = styled.div`
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
  line-height: 150%;
`;

export const Title = styled.span`
  color: var(--grayscale-90);
  font-size: 24px;
  font-weight: 700;
`;

export const DescrtionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: var(--grayscale-50);
  font-size: 16px;
  font-weight: 500;
`;

export const GoNews = styled.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Icon = styled(RightArrowIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--grayscale-70);
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 24%;
  height: 15.75rem;
`;
