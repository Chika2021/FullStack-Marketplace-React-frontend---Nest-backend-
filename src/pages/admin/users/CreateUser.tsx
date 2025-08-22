import React from 'react'
import { Register } from '../../../services/RegisterService'




function CreateUser(): React.ReactElement {
    const { name, setName, email, setEmail, password, setPassword, handleSubmit} = Register()
    return (
        <div className="p-10">
            <h1 className="mb-8 font-extrabold text-4xl">CREATE USER</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-semibold" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoFocus
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button
                            type="submit"
                            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Register
                        </button>
                        <a className="font-semibold">Already registered?</a>
                    </div>
                </form>
                <aside className="">
                    <div className="bg-gray-100 p-8 rounded">
                        <h2 className="font-bold text-2xl">Instructions</h2>
                        <ul className="list-disc mt-4 list-inside">
                            <li>
                                All users must provide a valid email address and password to create
                                an account.
                            </li>
                            <li>
                                Users must not use offensive, vulgar, or otherwise inappropriate
                                language in their username or profile information
                            </li>
                            <li>Users must not create multiple accounts for the same person.</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>

    )
}

export default CreateUser