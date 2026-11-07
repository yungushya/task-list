import { Check } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

interface ICheckbox extends ComponentProps<'input'> {
  className?: string;
}

export const Checkbox = ({ className, checked, ...props }: ICheckbox) => {
  return (
    <label
      className={cn(
        'relative flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-md border transition-colors duration-300',
        {
          'border-accent bg-accent': checked,
          'border-border': !checked
        },
        className
      )}
    >
      <input
        type='checkbox'
        checked={checked}
        className='peer absolute inset-0 cursor-pointer appearance-none opacity-0'
        {...props}
      />

      <Check
        size={14}
        className={cn(
          'pointer-events-none text-text transition-opacity duration-300',
          {
            'opacity-0': !checked
          }
        )}
      />

      <span className='pointer-events-none absolute -inset-1 rounded-lg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-hover' />
    </label>
  );
};
