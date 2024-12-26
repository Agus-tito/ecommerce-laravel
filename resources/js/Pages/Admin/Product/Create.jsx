import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create() {

  const formData = {
    name: '',
    slug: '',
    description: '',
    price: '',
    stock: '',
    category_id: '',
    image: null,
    status: 'active',
  };
  const { data, errors, setData, post } = useForm(formData);

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    post(route('dashboard.products.store'));
  };

  return (
    <AdminLayout
      header={
        <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Crear Producto
          </h2>
          <Link href={route('dashboard.products.index')}>Productos</Link>
        </div>
      }
    >
      <Head title="Crear Producto" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form onSubmit={submit}>
                <div>
                  <InputLabel htmlFor="name" value="Name" />

                  <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                  />

                  <InputError message={errors.name} className="mt-2" />
                </div>


                <div className="mt-4">
                  <InputLabel htmlFor="slug" value="Slug" />

                  <TextInput
                    id="slug"
                    type="text"
                    name="slug"
                    value={data.slug}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('slug', e.target.value)}
                  />

                  <InputError message={errors.slug} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="description" value="Description" />

                  <TextInput
                    id="description"
                    type="text"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    autoComplete="current-description"
                    onChange={(e) => setData('description', e.target.value)}
                  />

                  <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="price" value="Price" />

                  <TextInput
                    id="price"
                    type="text"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('price', e.target.value)}
                  />

                  <InputError message={errors.price} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="stock" value="Stock" />

                  <TextInput
                    id="stock"
                    type="text"
                    name="stock"
                    value={data.stock}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('stock', e.target.value)}
                  />

                  <InputError message={errors.stock} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="category_id" value="Category" />

                  <TextInput
                    id="category_id"
                    type="text"
                    name="category_id"
                    value={data.category_id}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('category_id', e.target.value)}
                  />

                  <InputError message={errors.category_id} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="status" value="Estado" />

                  <select
                    id="status"
                    name="status"
                    value={data.status}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={(e) => setData('status', e.target.value)}
                  >
                    <option value="active">Activo</option>
                    <option value="inactive">Inactivo</option>
                  </select>

                  <InputError message={errors.status} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <PrimaryButton className="ms-4" action="summit">
                    Log in
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}