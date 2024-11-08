import styled from 'styled-components';

export const SelectBox = styled.div`
  position: sticky;
  bottom: 1.875rem;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem;
  gap: 1.25rem;
  border-radius: 1rem;
  background-color: var(--main-5);
  box-shadow: 2px 4px 16px 0px rgba(88, 88, 88, 0.2);
`;

export const Message = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Title = styled.span`
  color: var(--grayscale-90);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
`;

export const Count = styled.span`
  color: var(--main-50);
`;

export const KeywordBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: var(--main-0);
`;

export const KeywordContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow: auto;
`;

export const Text = styled.p<{ $isError: boolean }>`
  color: ${({ $isError }) => ($isError ? 'var(--red)' : 'var(--grayscale-50)')};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Divider = styled.div`
  width: 1px;
  height: 2.5rem;
  background-color: var(--grayscale-10);
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--main-40);
  color: var(--main-0);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
  border: none;
  outline: none;
`;
