'use client';

import Link from 'next/link';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const fetchMyApi = 'http://localhost:8000/api/posts/0';
const fetchMyApyProd = '/api/posts/0';

export default function Home() {
  const [postContent, setPostContent] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    axios
      .get(fetchMyApi)
      .then((response) => {
        let digestedPost = response.data.body;
        setPostContent(digestedPost.postContent);
        setTitle(digestedPost.title);
        setId(digestedPost.id);
        setDate(digestedPost.date);
        console.log(digestedPost);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-[5rem]">
          <span className="block">Next.js +</span>
          <span className="block">FastAPI</span>
        </h1>
      </div>
      <section>
        <div className="space-y-4 py-4 text-center">
          <p>That is right, fam! Python in the trunk JS in the frunth.</p>
          <p>Below we have a example of a post fetched from our API</p>
        </div>
        <div className="space-y-4 text-left">
          <h1 className="text-4xl">{title || 'Api not loaded'}</h1>
          <p className="text-2xl">{postContent || 'Api not loaded'}</p>
          <p className="text-1xl">
            {date || 'Api not loaded'} | {id || 'Api not loaded'}
          </p>
        </div>
      </section>
      <section className="space-y-4 py-4 text-center">
        <Link href="/apiTest">
          <p className="text-1xl">Wanna see more? Click here ‼️</p>
        </Link>
      </section>
      <footer>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Go there to see the api
          <Link href="/api/">
            <code className="font-mono font-bold">api/index.py</code>
          </Link>
        </p>
      </footer>
    </main>
  );
}
