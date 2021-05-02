import { useRouter } from 'next/router';
import H1 from '@/components/H1';

export default function PdpPage() {
  const router = useRouter();

  console.log('router: ', router);
  console.log('router.pathname: ', router.pathname);
  console.log('router.query: ', router.query);

  return (
    <>
      <H1 text='text' />
      <h1>nested id</h1>
    </>
  );
}
