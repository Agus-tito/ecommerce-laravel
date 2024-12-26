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
    image: null,
  };

  const { data, errors, setData, post } = useForm(formData);

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    post(route('dashboard.categories.store'));
  };

  return (
    <AdminLayout
      header={
        <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Crear Categoria
          </h2>
          <Link href={route('dashboard.categories.index')}>Categoria</Link>
        </div>
      }
    >
      <Head title="Crear Categoria" />

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