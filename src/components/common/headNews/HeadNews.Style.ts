import styled from 'styled-components';

export const HeadNews = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 26.25rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -8.68%, rgba(0, 0, 0, 0.8) 91.11%),
    ${(props) => `url(${props.$imageUrl})`};
  background-size: cover;
  background-position: center;
  padding: 9.125rem 8.5rem 3.125rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--main-0);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Head = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.span`
  font-size: 1.75rem;
`;

export const Quiz = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.625rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
`;
