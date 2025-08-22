import { useState } from "react"
import { useNavigate } from "react-router-dom"


// const apiURL = 'http://localhost:3000'

export type Product = {
    name: string,
    description: string,
    price: string,
    imageUrl: string
}

export const productRequest = async (product: Product): Promise<{token: string}> => {
    const response = await fetch( 'http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(product)
    })

    if(!response.ok) {
        throw new Error('Cannot Fetch Products')
    }
    return response.json()
}

export const createProduct =  () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price , setPrice ] = useState('')
    const [imageUrl, setImageUrl ] = useState('')

    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();
        if(!name) {
            throw new Error('Name must be empty')
        } else if(!description) {
            throw new Error('Description must not be empty')
        } else if (!price) {
            throw new Error('Price must not be emplty')
        } else if (!imageUrl) {
            throw new Error('Image Must not be empty')
        }

        try {
            const product: Product = { name , description , price , imageUrl }
            const sendRequest = await productRequest(product)
            localStorage.setItem('token', sendRequest.token)
                alert('Product Created Successfully')
                setName('')
                setDescription('')
                setPrice('')
                setImageUrl('')

            navigate('/dashboard')
        } catch (error) {
            throw new Error(`Error creating product ${error}`)
        }
    }

    return { name, description, 
        price, imageUrl, setName, setDescription,
         setPrice, setImageUrl, handleSubmit }

}
