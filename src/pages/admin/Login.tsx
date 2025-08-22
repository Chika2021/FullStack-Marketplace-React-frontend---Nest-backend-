import React from "react"
import { useLogin } from "../../services/LoginService"

function Login(): React.ReactElement {
    const { email, setEmail, password, setPassword, loading, error, handleSubmit } = useLogin()

    return (
        <div>
            <div className="bg-cover bg-gradient-to-br from-[#7337FF] via-[#000000] to-[#0C7EA8]"
                style={{
                    backgroundImage:
                        "url(https://res.cloudinary.com/dkt1t22qc/image/upload/v1742348950/Prestataires_Documents/fopt5esl9cgvlcawz1z4.jpg)"
                }}
            >
                <div className="h-screen flex justify-center items-center backdrop-brightness-50">
                    <div className="flex flex-col items-center space-y-8">
                        <form onSubmit={handleSubmit}
                            className="rounded-[20px] w-80 p-8 bg-[#310D84]"
                            style={{ boxShadow: "-6px 3px 20px 4px #0000007d" }}
                        >
                            <h1 className="text-white text-3xl font-bold mb-4">Login</h1>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-[#8777BA] w-full p-2.5 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="bg-[#8777BA] w-full p-2.5 rounded-md"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`h-10 w-full cursor-pointer text-white rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] shadow-md shadow-blue-950 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    {loading ? "Signing In..." : "Sign In"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
