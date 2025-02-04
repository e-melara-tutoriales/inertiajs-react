import { useState } from 'react';
import Dropdown from '../Components/Dropdown';

import ChirpForm from '@/Pages/Chirps/ChirpForm';

export default function ChirpItem({ chirp, auth }) {
  const [editing, setEditing] = useState(false);
  return (
    <div className={'flex space-x-2 p-6'}>
      <div className={'flex-1'}>
        <div className={'flex items-center justify-between'}>
          <div>
            <span className={'text-gray-800 dark:text-gray-200'}>
              {chirp.user.name}
            </span>
            <small className={'ml-2 text-sm text-gray-600 dark:text-gray-400'}>
              {chirp.created_at}
            </small>
          </div>
        </div>
        {editing ? (
          <ChirpForm className={'mt-2'} chirp={chirp} setEditing={() => setEditing(false)} />
        ) : (
          <div className={'mt-4 text-lg text-gray-900 dark:text-gray-100'}>
            {chirp.message}
          </div>
        )}
      </div>
      {auth.user.id === chirp.user.id && (
        <Dropdown>
          <Dropdown.Trigger>...</Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Button onClick={() => setEditing(true)}>
              Edit
            </Dropdown.Button>
            <Dropdown.Link
              href={route('chirps.destroy', chirp)}
              method="delete"
              as="button"
            >
              Delete
            </Dropdown.Link>
          </Dropdown.Content>
        </Dropdown>
      )}
    </div>
  );
}
