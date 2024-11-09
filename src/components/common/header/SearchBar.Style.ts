import styled from 'styled-components';

export const InputPart = styled.div`
  display: flex;
  width: 17.5rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid var(--grayscale-10);
  background: var(--main-0);
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 0.875rem;
  flex: 1;
  align-items: center;
  margin-right: 0.5rem;
  &::placeholder {
    color: var(--grayscale-30);
    font-weight: 500;
    line-height: 150%;
  }
`;

export const SearchImg = styled.img`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
`;
