import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ForwardTo404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/404');
  }, []);

  return <></>;
};

export default ForwardTo404;
