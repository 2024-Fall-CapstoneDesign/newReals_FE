import styled from 'styled-components';

export const AddPoint = styled.div<{ $type?: 'header' | 'quiz' }>`
  display: inline-flex; //내부 글씨에 맞춤
  padding: 0.375rem 0.75rem;
  padding: ${({ $type }) => ($type === 'header' ? '.5rem 1rem' : '.375rem .75rem')};
  align-items: center;
  gap: 0.25rem;
  border-radius: 25rem;
  background: var(--main-5);
  color: var(--grayscale-90);
  font-size: ${({ $type }) => ($type === 'header' ? '.875rem' : '.75rem')};
  font-weight: 500;
  line-height: 150%;
`;

export const CoinImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const Text = styled.p<{ $type?: 'header' | 'quiz' }>`
  color: ${({ $type }) => ($type === 'header' ? 'var(--main-50)' : 'var(--grayscale-90)')};
`;
