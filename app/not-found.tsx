import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-[5rem]">
          <span className="block">Go back fam,</span>
          <span className="block">Nothing here for ya!</span>
        </h1>
        <Link href="/" className=":onhover:underline ">
          Go back
        </Link>
        <footer className="text-4xl font-bold tracking-tight py-8">
          <span className="block">404 not found.</span>
        </footer>
      </div>
    </main>
  );
}
