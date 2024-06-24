import clsx from 'clsx';
import { type ForwardedRef, forwardRef } from 'react';
import {
  type TooltipFloatingProps as MantineTooltipFloatingProps,
  TooltipFloating as MantineTooltipFloating,
  createPolymorphicComponent,
} from '@mantine/core';

import classes from './tooltip-floating.module.css';

export type TooltipFloatingProps = MantineTooltipFloatingProps & {};

function render(
  { className, children, ...props }: TooltipFloatingProps,
  ref: ForwardedRef<HTMLDivElement> = null
) {
  return (
    <MantineTooltipFloating
      component="div"
      {...props}
      ref={ref}
      className={clsx(classes['tooltip-floating'], className)}
    >
      {children}
    </MantineTooltipFloating>
  );
}

export const TooltipFloating = createPolymorphicComponent<'div', TooltipFloatingProps>(
  forwardRef<HTMLDivElement, TooltipFloatingProps>(render)
);

export default TooltipFloating;
