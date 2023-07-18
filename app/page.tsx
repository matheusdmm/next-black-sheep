import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-[5rem]">
          <span className="block">Next.js +</span>
          <span className="block">FastAPI</span>
        </h1>
      </div>
      <section>
        <div className="space-y-4 text-center">
          That's right, fam! Python in the trunk JS in the frunth.{' '}
        </div>
        <iframe
          src="https://giphy.com/embed/3o6Zt481isNVuQI1l6"
          width="480"
          height="300"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </section>
      <footer>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Go there to see the api&nbsp;
          <Link href="/api/python">
            <code className="font-mono font-bold">api/index.py</code>
          </Link>
        </p>
      </footer>
    </main>
  );
}
