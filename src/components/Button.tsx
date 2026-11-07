import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/utils/cn';

interface IButton extends ComponentProps<'button'> {
  className?: string;
  children?: ReactNode;
}

export const Button = ({ className, children, ...props }: IButton) => {
  return (
    <button
      type='button'
      className={cn(
        'rounded-button cursor-pointer bg-accent px-4 py-2 font-medium text-text transition-opacity duration-300 hover:opacity-90 focus-visible:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hover disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
