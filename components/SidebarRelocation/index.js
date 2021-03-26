import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import { useSelector } from 'react-redux';
import * as S from './styles';

const SidebarRelocation = ({ data }) => {
  const language = useSelector((state) => state.language);

  return (
    <S.Section>
      <S.H4>{language ? data.titleEn : data.title}</S.H4>
      <S.StyledSubtitle>
        {language ? data.subtitleEn : data.subtitle}
      </S.StyledSubtitle>
      <Link href={data.href} passHref>
        <S.StyledArrow>
          <ArrowRight />
        </S.StyledArrow>
      </Link>
      <S.RelocationBackground language={language} />
    </S.Section>
  );
};

export default SidebarRelocation;
