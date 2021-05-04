import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function PDP() {
  useEffect(() => {
    // Shallow routing (change URL without running data fetching methods again)
    router.push('pdp/?counter=10', undefined, { shallow: true });
  }, []);

  const router = useRouter();

  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_FOR_BROWSER_USER}</h1>
      <Link href='/'>Link</Link>
      <div onClick={() => router.push('/')}>Router link</div>
    </>
  );
}
