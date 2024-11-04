import styled from 'styled-components';
import XIcon from '../../../assets/icons/XIcon.svg?react';

export const Keyword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.125rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--grayscale-5);
  color: var(--grayscale-70);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 150%;
`;

export const Icon = styled(XIcon)`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
