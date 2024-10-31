import styled from 'styled-components';

export const ImageCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24.625rem;
  height: 22.625rem;
  gap: 1.25rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 15.125rem;
  border-radius: 1rem;
`;

export const Bookmark = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  max-width: 24.625rem;
  height: 22.625rem;
  justify-content: space-between;
  background-color: var(--main-0);
  border-radius: 1rem;
  border: 1px solid var(--grayscale-10);
`;

export const Category = styled.div`
  display: flex;
  gap: 1rem;
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
  margin-bottom: 0.5rem;
`;

export const Keyword = styled.p`
  color: var(--main-50);
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
`;

export const Title = styled.span`
  color: var(--grayscale-90);
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 150%;
`;

export const Description = styled.p`
  color: var(--black);
  font-size: 1rem;
  line-height: 150%;
`;

export const Date = styled.p`
  color: var(--grayscale-60);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  margin-top: 0.25rem;
`;
