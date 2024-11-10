import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SubCategory = styled.div`
  ${FontStyles.MD2_Bold};
  display: flex;
  justify-content: space-between;
  color: ${colors.Grayscale90};
`;

export const Total = styled.div`
  ${FontStyles.SM_Medium}
  display: flex;
  gap: 0.375rem;
  align-items: center;
  color: ${colors.Grayscale50};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;
