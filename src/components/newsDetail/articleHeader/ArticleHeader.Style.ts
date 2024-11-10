import styled from 'styled-components';

export const ArticleHead = styled.div`
  display: flex;
  width: 44.5625rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const CategoryPart = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  gap: 0.75rem;
  color: var(--main-50);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 0.75rem;
`;

export const TitlePart = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1.25rem;
`;

export const Title = styled.div`
  color: var(--grayscale-90);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%;
`;

export const Date = styled.div`
  color: var(--black);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
`;

export const MyPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
