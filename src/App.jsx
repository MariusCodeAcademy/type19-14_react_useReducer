import Counter from './components/counter/Counter';
import CounterBetter from './components/counter/CounterBetter';

export default function App() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-semibold mb-10'>Use Reducer</h1>
      <Counter />
      <hr className='my-5' />
      <CounterBetter />
    </div>
  );
}
