import styled from 'styled-components';

export const InputPart = styled.div`
  display: flex;
  width: 380px;
  padding: 0.75rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  border: 0.0625rem solid var(--grayscale-10);
  background: var(--main-0);
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  flex: 1;
  align-items: center;
  margin-right: 0.75rem;
  &::placeholder {
    color: var(--grayscale-30);
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`;

export const SearchImg = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;
