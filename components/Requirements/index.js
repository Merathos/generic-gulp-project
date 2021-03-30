import { MarkerList } from 'components';
import * as S from './styles';

const Requirements = (props) => {
  const { data, type } = props;
  return (
    <>
      <S.H2>{data.title}</S.H2>
      <MarkerList type={type} data={data.list} />
    </>
  );
};

export default Requirements;
