// services/ProductDetail.ts
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiURL = "http://localhost:3000/products"; // ✅ add http://

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const useProductDetails = () => {
  const { id } = useParams(); // ✅ use inside hook/component
  const numericId = Number(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch(`${apiURL}/${numericId}`);
        if (!response.ok) {
          throw new Error("Unable to Load Data");
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [numericId]);

  return { product, loading, error };
};
