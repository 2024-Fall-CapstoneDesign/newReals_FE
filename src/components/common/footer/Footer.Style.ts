import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 16.4375rem;
  padding: 2.5rem 8.5rem;
  background-color: var(--grayscale-5);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--grayscale-90);
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Logo = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Divider = styled.div`
  width: 0.0625rem;
  height: 1rem;
  background-color: #353743;
`;

export const Copyright = styled.p`
  color: var(--grayscale-70);
`;
