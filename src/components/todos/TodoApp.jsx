/* eslint-disable no-case-declarations */
import { useReducer, useState } from 'react';
import Button from '../counter/UI/Button';
import OneTodo from './OneTodo';

const initTodos = [
  { id: 1, title: 'Pull ups', isDone: false },
  { id: 2, title: 'Read a book', isDone: true },
  { id: 3, title: 'Buy Bread', isDone: false }, // idToToggle === 3
  { id: 4, title: 'Buy Bread', isDone: true }, // id to dele
];

let countId = 5;

function todoReducer(state, action) {
  console.log('action ===', action);
  switch (action.type) {
    case 'DEL':
      const idToDelete = action.payload;
      const filtered = state.filter((pObj) => pObj.id !== idToDelete);
      return filtered;
    case 'ADD':
      return [...state, { id: countId++, title: action.payload, isDone: false }];
    // pasidaryti make done (sunkesnis)
    case 'TOGGLE':
      const idToToggle = action.payload;
      return state.map((pObj) => {
        // ar radom ta objekta kuri pakeisti?
        if (pObj.id === idToToggle) {
          // grazinti kopija su pakeitimu
          return { ...pObj, isDone: !pObj.isDone };
        } else {
          // grazinti ta pati objekta
          return pObj;
        }
      });
    default:
      console.warn('type nerstas', action);
      return state;
  }
}

export default function TodoApp() {
  const [state, dispach] = useReducer(todoReducer, initTodos);
  const [newTodoVal, setNewTodoVal] = useState('');
  console.log('state ===', state);

  const handleDelete = (idToDelete) => {
    dispach({ type: 'DEL', payload: idToDelete });
  };

  const handleNewTodo = () => {
    console.log('ivesta reiksme', newTodoVal);
    dispach({ type: 'ADD', payload: newTodoVal });
  };

  const handleDone = (idToToggle) => {
    console.log('handleDone', idToToggle);
    dispach({ type: 'TOGGLE', payload: idToToggle });
  };

  return (
    <div>
      <h2 className='text-2xl mb-10'>TodoApp</h2>

      <div className='flex mb-10 gap-1'>
        <input
          onChange={(event) => setNewTodoVal(event.target.value)}
          value={newTodoVal}
          className='border w-full px-3 py-[6px] rounded-md'
          type='text'
          placeholder='new todo'
        />
        <Button onClick={handleNewTodo} outline>
          add
        </Button>
      </div>

      <ul className='flex flex-col gap-3 '>
        {state.map((tObj) => (
          <OneTodo onDelete={handleDelete} onDone={handleDone} key={tObj.id} item={tObj} />
        ))}
      </ul>
    </div>
  );
}
