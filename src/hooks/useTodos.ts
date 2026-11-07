import { useEffect, useState } from 'react';

import type { ITodo } from '@/types/todo.types';

import { STORAGE_KEY } from '@/constants/tokens';

const isTodo = (value: unknown): value is ITodo => {
  if (typeof value !== 'object' || value === null) return false;

  const todo = value as Record<string, unknown>;

  return (
    typeof todo.id === 'string' &&
    typeof todo.text === 'string' &&
    typeof todo.completed === 'boolean'
  );
};

const readStoredTodos = (): ITodo[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed) || !parsed.every(isTodo)) return [];

    return parsed;
  } catch {
    return [];
  }
};

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>(readStoredTodos);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Не удалось сохранить задачи:', error);
    }
  }, [todos]);

  const onAdd = (text: string) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    const todo: ITodo = {
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false
    };

    setTodos((prev) => [...prev, todo]);
  };

  const onToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, onAdd, onToggle, onDelete };
};
