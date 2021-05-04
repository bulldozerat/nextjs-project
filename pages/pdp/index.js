import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function PDP() {
  useEffect(() => {
    // Shallow routing (change URL without running data fetching methods again)
    push('pdp/?counter=10', undefined, { shallow: true });
  }, []);

  const { defaultLocale, locales, locale, push } = useRouter();

  console.log('locales: ', defaultLocale, locales, locale);
  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_FOR_BROWSER_USER}</h1>
      <Link href='/'>Link</Link>
      <div onClick={() => push('/')}>Router link</div>
    </>
  );
}
