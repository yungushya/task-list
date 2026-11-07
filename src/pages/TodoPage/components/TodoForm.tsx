import { useState } from 'react';

import { Button, Input } from '@/components';

interface ITodoForm {
  onAdd: (text: string) => void;
}

export const TodoForm = ({ onAdd }: ITodoForm) => {
  const [text, setText] = useState('');

  const onSubmit = () => {
    onAdd(text);
    setText('');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className='flex gap-2 max-sm:flex-col'
    >
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Новая задача'
      />

      <Button type='submit'>Добавить</Button>
    </form>
  );
};
