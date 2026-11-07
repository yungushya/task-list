import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

interface IInput extends ComponentProps<'input'> {
  className?: string;
}

export const Input = ({ className, ...props }: IInput) => {
  return (
    <input
      className={cn(
        'w-full rounded-button border border-border bg-surface-raised px-4 py-2 text-text transition-colors duration-300 placeholder:text-text-muted focus-visible:border-accent-hover focus-visible:outline-none',
        className
      )}
      {...props}
    />
  );
};
