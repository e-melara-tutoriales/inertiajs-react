import { useMemo } from 'react'


import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";

import ChirpItem from '@/Components/ChirpItem.jsx'

import ChirpForm from './ChirpForm';

export default function ChirpIndex(props) {
  const { auth, chirps } = props;
  const chirpsList = useMemo(() => chirps, [chirps]);

  return (
    <Authenticated
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <ChirpForm />
            </div>
          </div>
          <div className={'mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg divide-y'}>
            {chirpsList.map((chirp) => (
                <ChirpItem key={chirp.id} chirp={chirp} />
            ))}
          </div>
        </div>
      </div>
    </Authenticated>
  );
}