import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const HeadNews = styled.div<{ $imageUrl: string }>`
  ${FontStyles.LG_Bold}
  width: 100%;
  height: 32.5rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -8.68%, rgba(0, 0, 0, 0.8) 91.11%),
    ${(props) => `url(${props.$imageUrl})`};
  background-size: cover;
  background-position: center;
  padding: 12.25rem 8.5rem 6.25rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${colors.Main0};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Head = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.span`
  ${FontStyles.XXL_Regular}
`;

export const Quiz = styled.div`
  ${FontStyles.MD2_SemiBold}
  display: flex;
  width: fit-content;
  gap: 0.625rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
`;

export const Navigation = styled.div`
  ${FontStyles.MD1_Regular}
  display: flex;
  align-items: center;
  gap: 1rem;
`;
