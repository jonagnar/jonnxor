import clsx from 'clsx';
import { type ForwardedRef, forwardRef } from 'react';
import {
  type TooltipProps as MantineTooltipProps,
  Tooltip as MantineTooltip,
  createPolymorphicComponent,
} from '@mantine/core';

import classes from './tooltip.module.css';

export type TooltipProps = MantineTooltipProps & {};

function render(
  { className, children, ...props }: TooltipProps,
  ref: ForwardedRef<HTMLDivElement> = null
) {
  return (
    <MantineTooltip
      component="div"
      {...props}
      ref={ref}
      className={clsx(classes.tooltip, className)}
    >
      {children}
    </MantineTooltip>
  );
}

export const Tooltip = createPolymorphicComponent<'div', TooltipProps>(
  forwardRef<HTMLDivElement, TooltipProps>(render)
);

export default Tooltip;
