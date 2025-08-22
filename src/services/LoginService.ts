import { useState } from "react"
import { useNavigate } from "react-router-dom"

export type LoginResponse = {
    token: string
}

const apiUrl = "http://localhost:3000/user/login"

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    const user  = {email, password}
    const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if (!response.ok) {
        // if backend returns 401/400/500 etc.
        const errorData = await response.json()
        throw new Error(errorData.message || "Login failed")
    }

    return response.json()
}

export const useLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

  
        if (!email || !password) {
            setError("Email and password are required")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const data = await loginUser(email, password)
            localStorage.setItem("token", data.token)
            localStorage.setItem('email', email)
            navigate('/dashboard')
            alert("Login Success ✅")
        } catch (err: any) {
            setError(err.message || "Failed to login")
        } finally {
            setLoading(false)
        }
    }

    return { email, setEmail, password, setPassword, loading, error, handleSubmit }
}
