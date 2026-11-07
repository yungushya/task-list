import { useTodos } from '@/hooks/useTodos';

import { TodoForm, TodoList } from '@/pages/TodoPage/components';

export const TodoPage = () => {
  const { todos, onAdd, onToggle, onDelete } = useTodos();

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 px-4 py-12'>
      <h1 className='text-center text-2xl font-semibold'>Список задач</h1>

      <TodoForm onAdd={onAdd} />

      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
};
