import styled from 'styled-components';
import Colors from '../../../styles/Colors';

export const Bookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 200px;
  background-color: ${Colors.Grayscale5};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
