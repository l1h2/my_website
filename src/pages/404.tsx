import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="content-container">
      <h1>404 - That page does not seem to exist...</h1>
      <Link href="/">
        <button className="btn-default">Go home</button>
      </Link>
    </main>
  );
}
