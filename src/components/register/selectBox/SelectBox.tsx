import { useKeywordContext } from '../context/KeywordContext';
import ErrorMessage from '../errorMessage/ErrorMessage';
import SelectItem from '../selectItem/SelectItem';
import * as S from './SelectBoxStyle';
import RightIcon from '/public/icons/RightArrowIcon.svg?react';
import { useEffect, useState } from 'react';

const SelectBox = () => {
  const [isError, setIsError] = useState(false);
  const { isActives, setIsActives, getAllSelectedKeywords } = useKeywordContext();

  const count = getAllSelectedKeywords().length;

  const handleRemoveKeyword = (keyword: string) => {
    setIsActives(isActives.filter((item) => item !== keyword));
  };

  useEffect(() => {
    setIsError(count > 5 || count === 0);
  }, [count]);

  return (
    <S.SelectBox>
      <S.Title>
        {count > 0 ? (
          <S.Message>
            <span>
              <S.Count>{count}개</S.Count>의 키워드를 선택했어요!
            </span>
            {isError && <ErrorMessage message="키워드는 최대 5개까지만 선택할 수 있어요." />}
          </S.Message>
        ) : (
          '키워드를 선택해주세요'
        )}
      </S.Title>
      <S.KeywordBox>
        {count > 0 ? (
          <S.KeywordContainer>
            {isActives.map((keyword) => (
              <SelectItem
                key={keyword}
                keyword={keyword}
                onRemove={() => handleRemoveKeyword(keyword)}
              />
            ))}
          </S.KeywordContainer>
        ) : isError ? (
          <ErrorMessage message="관심 있는 키워드를 한 개 이상 골라야 맞춤 기사를 추천받을 수 있어요!" />
        ) : (
          <S.Text $isError={false}>원하는 키워드를 한 개 이상 골라주세요!</S.Text>
        )}
        <S.ButtonContainer>
          <S.Divider />
          <S.Button
            onClick={() => {
              console.log(isActives);
            }}
          >
            내 맞춤 기사 보러가기
            <RightIcon />
          </S.Button>
        </S.ButtonContainer>
      </S.KeywordBox>
    </S.SelectBox>
  );
};

export default SelectBox;
