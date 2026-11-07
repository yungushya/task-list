import type { ITodo } from '@/types/todo.types';

import { TodoItem } from '@/pages/TodoPage/components/TodoItem';

interface ITodoList {
  todos: ITodo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete }: ITodoList) => {
  return (
    <ul className='flex flex-col gap-2'>
      {todos.length === 0 ? (
        <p className='text-center text-text-muted'>Задач пока нет</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
};
