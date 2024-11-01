import { createContext, useContext, useState } from 'react';

interface KeywordContextProps {
  isActives: string[];
  setIsActives: React.Dispatch<React.SetStateAction<string[]>>;
  getAllSelectedKeywords: () => string[];
}

const KeywordContext = createContext<KeywordContextProps | undefined>(undefined);

interface KeywordProviderProps {
  children: React.ReactNode;
}

const KeywordProvider = ({ children }: KeywordProviderProps) => {
  const [isActives, setIsActives] = useState<string[]>([]);

  const getAllSelectedKeywords = () => isActives;

  return (
    <KeywordContext.Provider value={{ isActives, setIsActives, getAllSelectedKeywords }}>
      {children}
    </KeywordContext.Provider>
  );
};

export default KeywordProvider;

export const useKeywordContext = () => {
  const context = useContext(KeywordContext);
  if (!context) {
    throw new Error('useKeywordContext는 반드시 KeywordProvider 내부에서 사용해야 합니다');
  }
  return context;
};
