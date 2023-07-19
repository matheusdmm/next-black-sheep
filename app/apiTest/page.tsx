'use client';
import Link from 'next/link';
import axios from 'axios';

const urlEndpointProd = '';

export default function apiInteraction() {
  const CreateUser = (e: any) => {
    e.preventDefault();
    const urlEndpoint = 'http://localhost:8000/api/users/';
    const formData = new FormData(e.target);
    formData.append('id', '0');

    const payload = Object.fromEntries(formData);

    if (
      payload.username === '' ||
      payload.password === '' ||
      payload.role === ''
    ) {
      alert('Please fill in all fields');
    } else {
      axios
        .post(urlEndpoint, payload)
        .then(function (response) {
          console.info(response);
          alert(`User ${payload.username} created!`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const UserLogin = (e: any) => {
    e.preventDefault();
    const urlEndpoint = 'http://localhost:8000/api/users/';
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    axios
      .get(urlEndpoint)
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          className="grid grid-cols-1 gap-4 text-black"
          onSubmit={CreateUser}
        >
          <input
            className="rounded-md"
            type="text"
            placeholder="username"
            name="username"
          />
          <input
            className="rounded-md"
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            className="rounded-md"
            type="text"
            placeholder="role"
            name="role"
          />

          <input
            className="text-white border-2 border-white rounded-md"
            type="submit"
            value="Register"
          />
        </form>
      </section>

      <section className="space-y-4">
        <form
          action="/api/users/"
          method="POST"
          className="grid grid-cols-1 gap-4 text-black"
          onSubmit={UserLogin}
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
          />
        </form>
      </section>
    </main>
  );
}
