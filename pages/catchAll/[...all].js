import { useRouter } from 'next/router';

export default function PdpPage() {
  const router = useRouter();

  console.log('router: ', router);
  console.log('router.pathname: ', router.pathname);
  console.log('router.query: ', router.query);

  return (
    <>
      <h1>catch all</h1>
    </>
  );
}
