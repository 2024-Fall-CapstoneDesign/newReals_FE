import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.375rem;
`;

export const Title = styled.span`
  color: var(--grayscale-90);
  font-size: 24px;
  font-weight: 700;
`;

export const DescrtionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: var(--grayscale-50);
  font-size: 16px;
  font-weight: 500;
`;

export const Keywords = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 1.25rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
