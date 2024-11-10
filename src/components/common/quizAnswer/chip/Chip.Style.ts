import styled from 'styled-components';
import FontStyles from '../../../../styles/Fonts';
import colors from '../../../../styles/Colors';

export const Chip = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.Main10};
  color: ${colors.Main50};
`;
