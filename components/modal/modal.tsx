'use client';

import { type ForwardedRef, forwardRef } from 'react';
import {
  type ModalProps as MantineModalProps,
  Modal as MantineModal,
  createPolymorphicComponent,
} from '@mantine/core';

import { useRouter } from '@/navigation';

export type ModalProps = Partial<MantineModalProps> & {
  /** Deprecated (Please import from `@mantine/core` instead) */
  opened?: boolean;
};

function render(
  { opened, onClose, children, ...props }: ModalProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const router = useRouter();

  function handleClose() {
    onClose?.();
    router.back();
  }

  return (
    <MantineModal component="div" {...props} ref={ref} opened onClose={handleClose}>
      {children}
    </MantineModal>
  );
}

export const Modal = createPolymorphicComponent<'div', ModalProps>(
  forwardRef<HTMLDivElement, ModalProps>(render)
);

export default Modal;
