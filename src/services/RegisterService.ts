import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// const apiUrl = 'http://localhost:3000'

type User = {
    name:string,
    email: string,
    password: string
}




export const RegisterUser = async (user: User):Promise<{token:string}> => {
    const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
    })

    if(!response.ok) {
        throw new Error('Registration Failed')
    }
    return response.json()
}

export const Register = () => {
    const navigate = useNavigate()
  
    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError]= useState<string | null>(null)
    // const [loading, setLoading] = useState(true)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

    // setLoading(true)
    // setError(null)

    if(!name) {
        throw new Error('Invalid Registration Name')
    } else if(!email) {
        throw new Error('Invalid Email')
    } else if(!password) {
        throw new Error('Invalid Password')
    }
    
    try{
        const user:User = {name, email, password}
        const register = await RegisterUser(user)
        localStorage.setItem('token', register.token)
        localStorage.setItem('email', email)
        navigate('/dashboard')
    } catch(err) {
        throw new Error(`Failed to Register ${err}`)
    } 
    
}

    return {
        name, setName, 
        email, setEmail, 
        password, setPassword,
        
        handleSubmit }

    
    
}
