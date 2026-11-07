import { Trash2 } from 'lucide-react';

import { cn } from '@/utils/cn';

import type { ITodo } from '@/types/todo.types';

import { Checkbox } from '@/components';

interface ITodoItem {
  todo: ITodo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: ITodoItem) => {
  return (
    <li
      className={cn(
        'flex items-start gap-3 rounded-item border border-border bg-surface-raised px-4 py-3 transition-opacity duration-300',
        {
          'opacity-70': todo.completed
        }
      )}
    >
      <Checkbox
        className='mt-0.5'
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span
        className={cn(
          'min-w-0 flex-1 break-words text-text transition-colors duration-300',
          {
            'text-text-muted line-through': todo.completed
          }
        )}
      >
        {todo.text}
      </span>

      <button
        type='button'
        onClick={() => onDelete(todo.id)}
        className='cursor-pointer shrink-0 rounded-button p-1 text-text-muted transition-opacity duration-300 hover:opacity-70'
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
};
