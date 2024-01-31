import { useEffect, useState } from 'react';

const btnNormal =
  'bg-indigo-500 text-white px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md';
const btnOutline =
  'text-indigo-500 bg-white px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md';

const initState = {
  value: 0,
};

export default function Counter() {
  const [state, setState] = useState(0);

  function goUp() {
    // padidinam state 1
    setState(state + 1);
    // jei state nauja reiksme priklauso nuo pries tai buvusios,
    // state turetu buti atnaujinamas su argumentu kaip funkcija
    // TODO: async setTimeout case !!!
  }
  function goDown() {
    // pamazinam state 1
    setState(state - 1);
  }

  function reset() {
    // pamazinam state 1
    setState(0);
  }

  // padaryti po kortele inputa kuri ivedant keistume <h3 className='text-lg mb-4'>Push ups</h3> reiksme

  return (
    <div className='inline-block rounded-md bg-indigo-50/50 border-indigo-300 border px-3 py-2 text-center shadow-md'>
      <h3 className='text-lg mb-4'>Push ups</h3>
      <p className='text-5xl mb-5'>{state}</p>
      <div className='flex gap-3'>
        <button onClick={goUp} className={btnNormal}>
          Up
        </button>
        <button onClick={goDown} className={btnNormal}>
          Down
        </button>
        <button onClick={reset} className={btnOutline}>
          reset
        </button>
      </div>
    </div>
  );
}
