import styled from 'styled-components';
import colors from '../../styles/Colors';
import FontStyles from '../../styles/Fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 6.25rem;
  gap: 2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.375rem;
`;

export const Title = styled.span`
  color: ${colors.Grayscale90};
  ${FontStyles.XL_Bold};
`;

export const Description = styled.p`
  color: ${colors.Grayscale50};
  ${FontStyles.MD2_Medium};
`;
