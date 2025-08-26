import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard(): React.ReactElement {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch products
    const fetchProducts = () => {
        setLoading(true);
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch products');
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    // Delete product
    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;
        const token = localStorage.getItem("token");
        await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        fetchProducts();
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    return (
        <div>
            <div className="flex min-h-screen bg-gray-200">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md  bg-gray-800 ">
                    <div className="p-6 font-bold text-purple-700 text-2xl">{localStorage.getItem("email") || "Admin User"}</div>
                    <nav className="mt-8">
                        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-purple-100">
                            Dashboard
                        </a>
                        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-purple-100">
                            Users
                        </a>
                        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-purple-100">
                            Analytics
                        </a>
                        <div onClick={handleLogout} className="block py-3 px-6 text-gray-700 hover:bg-purple-100">
                            Logout
                        </div>
                    </nav>
                </aside>
                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Top Navbar */}
                    <header className="bg-white shadow-md p-4 flex justify-between items-center">
                        <h1 className="text-xl font-bold text-purple-700">Dashboard</h1>
                        <div className="flex items-center gap-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-4 py-2 border rounded-lg"
                            />
                            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                                SR
                            </div>
                        </div>
                    </header>
                    {/* Content */}
                    <main className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-sm text-gray-500">Total Users</p>
                                <h2 className="text-3xl font-bold text-purple-700 mt-2">240</h2>
                            </div>

                            <div  className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-sm text-gray-500">Add product</p>
                                <Link to="/create">
                                    <h2 className="text-3xl font-bold text-green-600 mt-2">{products.length} </h2>
                                </Link>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-sm text-gray-500">New Orders</p>
                                <h2 className="text-3xl font-bold text-blue-600 mt-2">320</h2>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-sm text-gray-500">Pending Tickets</p>
                                <h2 className="text-3xl font-bold text-red-500 mt-2">12</h2>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-4 border-b font-bold text-purple-700">Product List</div>
                            {loading ? (
                                <div className="p-4 text-center">Loading products...</div>
                            ) : error ? (
                                <div className="p-4 text-center text-red-500">{error}</div>
                            ) : (
                                <table className="w-full text-left">
                                    <thead className="bg-purple-50">
                                        <tr>
                                            <th className="p-4">Name</th>
                                            <th className="p-4">Description</th>
                                            <th className="p-4">Price</th>
                                            <th className="p-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product: any) => (
                                            <tr key={product.id} className="border-t">
                                                <td className="p-4">{product.name}</td>
                                                <td className="p-4">{product.description}</td>
                                                <td className="p-4">₦{product.price}</td>
                                                <td className="p-4 flex gap-2">
                                                    <button
                                                        onClick={() => navigate(`/edit?id=${product.id}`)}
                                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                                    >Edit</button>
                                                    <button
                                                        onClick={() => handleDelete(product.id)}
                                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">

                            <button onClick={() => navigate('/register')} className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700">
                                Add User
                            </button>
                            <button className="bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">
                                Export Data
                            </button>
                            <button className="bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700">
                                Generate Report
                            </button>
                            <button className="bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700">
                                Delete Records
                            </button>
                        </div>
                      
                       
                    </main>
                </div>
            </div>

        </div>
    )
}



export default Dashboard