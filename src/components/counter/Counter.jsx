import { useState } from 'react';

const initState = {
  value: 0,
};

export default function Counter() {
  const [state, setState] = useState(0);

  function goUp() {
    // padidinam state 1
  }
  function goDown() {
    // pamazinam state 1
  }

  return (
    <div className='inline-block border px-3 py-2 text-center shadow-md'>
      <h3 className='text-lg mb-4'>Push ups</h3>
      <p className='text-5xl mb-5'>{state}</p>
      <div className='flex gap-3'>
        <button className='bg-indigo-500 text-white px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md'>
          Up
        </button>
        <button className='bg-indigo-500 text-white px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md'>
          Down
        </button>
      </div>
    </div>
  );
}
