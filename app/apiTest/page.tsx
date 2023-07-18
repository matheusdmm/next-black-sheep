'use client';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

const urlEndpoint = 'http://localhost:8000/api/users/';
const urlEndpointProd = '';

export default function apiInteraction() {
  const [post, setPost] = useState('');

  useEffect(() => {
    axios
      .post(urlEndpoint)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        // catch fire
      });
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold">
          Here we have a sandbox for the api
        </h1>
        <h3 className="text-2xl">
          Have a guess what username and password will be 🧛‍♂️🦇
        </h3>
      </div>
      <section className="space-y-4">
        <form
          action="/api/users/"
          method="POST"
          className="grid grid-cols-1 gap-4 text-black"
        >
          <input
            className="rounded-md"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            className="rounded-md"
            type="text"
            name="password"
            placeholder="password"
          />
          <input
            className="text-white border-2 border-white rounded-md"
            type="submit"
            value="Login"
            onSubmit={(e) => e.preventDefault}
          />
        </form>
      </section>
    </main>
  );
}
