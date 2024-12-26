import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

export default function Categories({ categories }) {
  return (
    <AdminLayout
      header={
        <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Categorias
          </h2>
          <Link href={route('dashboard.categories.create')}>Crear Categoria</Link>
        </div>
      }
    >
      <Head title="Categorias" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>description</th>
                  </tr>
                </thead>
                <tbody>
                {categories.map((category) => (
                    <tr key={category.id}>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        <Link href={route('dashboard.categories.edit', {category})}>Editar</Link>
                        <Link href={route('dashboard.categories.destroy', {category})} method='delete'>Eliminar</Link>
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