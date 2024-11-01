import { useKeywordContext } from '../context/KeywordContext';
import * as S from './SelectBoxStyle';
import RightIcon from '/public/icons/RightArrowIcon.svg?react';
import InfoIcon from '/public/icons/InfoIcon.svg?react';
import { useEffect, useState } from 'react';

const SelectBox = () => {
  const [isError, setIsError] = useState(false);
  const { isActives, setIsActives, getAllSelectedKeywords } = useKeywordContext();

  const count = getAllSelectedKeywords().length;

  const handleRemoveKeyword = (keyword: string) => {
    setIsActives(isActives.filter((item) => item !== keyword));
  };

  const handleError = () => {
    if (count > 5 || count == 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  useEffect(() => {
    if (count > 5) {
      setIsError(true);
    }
  }, [count]);

  return (
    <S.SelectBox>
      <S.Title>
        {count > 0 ? (
          <S.Message>
            <S.Count>{count}개</S.Count>의 키워드를 선택했어요!
            {isError && (
              <S.ErrorMessage>
                <InfoIcon />
                <S.Text $isError={isError}>키워드는 최대 5개까지만 선택할 수 있어요.</S.Text>
              </S.ErrorMessage>
            )}
          </S.Message>
        ) : (
          '키워드를 선택해주세요'
        )}
      </S.Title>
      <S.KeywordBox>
        {count > 0 ? (
          <S.KeywordContainer>
            {isActives.map((keyword) => (
              <S.Keyword key={keyword}>
                {keyword}
                <img
                  src="/icons/XIcon.svg"
                  alt="deleteIcon"
                  onClick={() => handleRemoveKeyword(keyword)}
                  style={{ cursor: 'pointer' }}
                />
              </S.Keyword>
            ))}
          </S.KeywordContainer>
        ) : isError ? (
          <S.ErrorMessage>
            <InfoIcon />
            <S.Text $isError={isError}>키워드는 최대 5개까지만 선택할 수 있어요.</S.Text>
          </S.ErrorMessage>
        ) : (
          <S.Text $isError={false}>원하는 키워드를 한 개 이상 골라주세요!</S.Text>
        )}
        <S.ButtonContainer>
          <S.Divider />
          <S.Button onClick={handleError}>
            내 맞춤 기사 보러가기
            <RightIcon />
          </S.Button>
        </S.ButtonContainer>
      </S.KeywordBox>
    </S.SelectBox>
  );
};

export default SelectBox;
