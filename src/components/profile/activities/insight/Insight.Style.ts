import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Text = styled.span`
  ${FontStyles.LG_Bold}
  color : ${Colors.Grayscale90};
`;

export const Insight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 1rem;
  width: 100%;
  max-height: 23.8125rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoContent = styled.div`
  ${FontStyles.MD2_Medium}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.25rem;
  gap: 0.75rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 1rem;
  width: 100%;
  color: ${Colors.Grayscale60};
`;

export const Icon = styled.img`
  width: 2.25rem;
  height: 2.25rem;
`;

export const Button = styled.button`
  ${FontStyles.SM_SemiBold}
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: ${Colors.Main0};
  color: ${Colors.Grayscale50};
  border: none;
  cursor: pointer;
`;
