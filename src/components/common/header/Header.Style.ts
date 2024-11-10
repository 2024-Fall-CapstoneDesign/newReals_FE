import styled from 'styled-components';
import MarketIcon from '../../../assets/icons/MarketIcon.svg?react';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const Head = styled.header`
  padding: 0.75rem 6.25rem 0.75rem 6.25rem;
  display: flex;
  align-items: center;
  height: 4.625rem;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.Grayscale10};
`;

export const ServiceImg = styled.img`
  width: 7.8125rem;
  height: 2rem;
  cursor: pointer;
`;

export const Category = styled.div`
  display: flex;
  gap: 4.125rem;
  padding-left: 5.25rem;
  flex: 1;
`;

export const CategoryItem = styled.div`
  ${FontStyles.MD2_SemiBold}
  color: ${colors.Grayscale90};
  cursor: pointer;
`;

export const LoginPart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LoginImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Login = styled.div`
  ${FontStyles.MD2_SemiBold}
  color: ${colors.Grayscale90};
  margin-left: 0.75rem;
  text-align: center;
`;

export const SidePart = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

export const Etc = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Info = styled.div`
  ${FontStyles.MD2_SemiBold}
  color: ${colors.Grayscale90};
  cursor: pointer;
`;

export const StyledMarketIcon = styled(MarketIcon)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? colors.Main50 : colors.Grayscale90)};
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
