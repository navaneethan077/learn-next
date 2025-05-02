import React from 'react'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Userspage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' } // revalidate every time
  )
  const users: User[] = await res.json()

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">User List</h1>
        <p className="mb-4">{new Date().toLocaleTimeString()}</p>

        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Username</th>
              <th className="p-4">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="transition-all duration-200 hover:bg-blue-100 active:bg-blue-200"
              >
                <td className="p-4">{user.id}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.username}</td>
                <td className="p-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center mt-4">
          <button className="btn btn-primary transition duration-300 ease-in-out hover:scale-105 active:scale-95">
            <a href="/users/new">Add New User</a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Userspage
