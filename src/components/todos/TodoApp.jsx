const initTodos = [
  { id: 1, title: 'Pull ups', isDone: false },
  { id: 2, title: 'Read a book', isDone: true },
  { id: 3, title: 'Buy Bread', isDone: false },
];

function todoReducer(state, action) {}

export default function TodoApp() {
  return (
    <div>
      <h2 className='text-2xl mb-10'>TodoApp</h2>

      <ul>
        <li>Do somtething</li>
      </ul>
    </div>
  );
}
