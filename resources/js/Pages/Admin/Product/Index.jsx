import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

export default function Productos({ products }) {
    return (
        <AdminLayout
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Productos
                    </h2>
                    <Link href={route('dashboard.products.create')}>Crear Productos</Link>
                </div>
            }
        >
            <Head title="Productos" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>price</th>
                                        <th>stock</th>  
                                        <th>category</th>
                                        <th>status</th>
                                        <th>description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.stock}</td>
                                            <td>{product.category?.name}</td>
                                            <td>{product.status}</td>
                                            <td>{product.description}</td>
                                            <td>
                                                <Link href={route('dashboard.products.edit', { product })}>Editar</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
