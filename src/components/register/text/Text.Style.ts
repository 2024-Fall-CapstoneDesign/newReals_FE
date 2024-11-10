import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Title = styled.div`
  ${FontStyles.XL_Bold}
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${colors.Grayscale90};
`;

export const HelperText = styled.p`
  ${FontStyles.MD2_SemiBold};
  color: ${colors.Main50};
`;

export const Description = styled.p`
  ${FontStyles.MD2_Medium};
  color: ${colors.Grayscale50};
`;
