import { useEffect, useState } from "react";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const apiUrl = 'http://localhost:3000' 

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${apiUrl}/products`);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (err) {
                setError("Failed to load products");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, loading, error };
};
