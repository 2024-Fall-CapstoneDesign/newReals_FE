import * as S from './ErrorMessageSytle';
import InfoIcon from '../../../assets/icons/InfoIcon.svg?react';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <S.ErrorMessage>
      <InfoIcon />
      <S.Text $isError={true}>{message}</S.Text>
    </S.ErrorMessage>
  );
};

export default ErrorMessage;
