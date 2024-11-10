import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const ImageCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 21.6875rem;
  height: 17.375rem;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 11.25rem;
  border-radius: 1rem;
`;

export const Bookmark = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  width: 100%;
  max-width: 21.6875rem;
  height: 17.375rem;
  justify-content: space-between;
  background-color: ${colors.Main0};
  border-radius: 1rem;
  border: 1px solid ${colors.Grayscale10};
`;

export const Category = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.375rem;
`;

export const Keyword = styled.p`
  ${FontStyles.XS_SemiBold}
  color: ${colors.Main50};
`;

export const Title = styled.span`
  ${FontStyles.MD2_SemiBold}
  color: ${colors.Grayscale90};
  margin-top: 0.375rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  ${FontStyles.XS_Regular}
  color: ${colors.Black};
`;

export const Date = styled.p`
  ${FontStyles.XS_Medium}
  color: ${colors.Grayscale60};
`;
