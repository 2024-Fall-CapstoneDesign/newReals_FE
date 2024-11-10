import styled from 'styled-components';
import colors from '../../../styles/Colors';
import FontStyles from '../../../styles/Fonts';

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem;
  gap: 1.25rem;
  border-radius: 1rem;
  background-color: ${colors.Main0};
  box-shadow: 2px 4px 16px 0px rgba(88, 88, 88, 0.2);
`;

export const Message = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Title = styled.span`
  ${FontStyles.MD1_SemiBold};
  color: ${colors.Grayscale90};
`;

export const Count = styled.span`
  color: ${colors.Main50};
`;

export const KeywordBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: ${colors.Main0};
`;

export const KeywordContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow: auto;
`;

export const Text = styled.p<{ $isError: boolean }>`
  ${FontStyles.SM_Medium};
  color: ${({ $isError }) => ($isError ? colors.Red : colors.Grayscale50)};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Divider = styled.div`
  width: 1px;
  height: 2.5rem;
  background-color: ${colors.Grayscale10};
`;

export const Button = styled.button`
  ${FontStyles.SM_Medium}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: ${colors.Main40};
  color: ${colors.Main0};
  cursor: pointer;
  border: none;
  outline: none;
`;
