import styled from 'styled-components';

export const Head = styled.div`
  padding: 0.75rem 6.25rem 0.75rem 6.25rem;
  display: flex;
  align-items: center;
  height: 4.625rem;
  width: 100%;
  justify-content: space-between;
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
  color: var(--grayscale-90);
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
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
  margin-left: 0.75rem;
  color: var(--grayscale-90);
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
`;

export const SidePart = styled.div`
  display: flex;
  gap: 3rem;
  align-item: center;
  justify-content: center;
`;

export const Etc = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Info = styled.div`
  color: var(--grayscale-90);
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
`;

export const MarketIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
