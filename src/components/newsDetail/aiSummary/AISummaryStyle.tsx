import styled from 'styled-components';

export const AIPart = styled.div`
  width: 44.5625rem;
  padding: 1rem 1.25rem;
  align-items: center;
  border-radius: 0.75rem;
  background: var(--grayscale-5);
`;

export const FixedPart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PartName = styled.div`
  color: var(--grayscale-90);
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
`;

export const ToggleImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 0.75rem;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--main-0);
  color: var(--grayscale-70);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
`;
