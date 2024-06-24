'use client';

import clsx from 'clsx';
import NextImage from 'next/image';
import { type ForwardedRef, forwardRef } from 'react';
import {
  type ImageProps as MantineImageProps,
  type ElementProps,
  Image as MantineImage,
} from '@mantine/core';

import classes from './image.module.css';

type NextImageProps = ElementProps<typeof NextImage, keyof MantineImageProps>;

export type ImageProps = MantineImageProps & NextImageProps & {};

function render({ className, ...props }: ImageProps, ref: ForwardedRef<HTMLImageElement>) {
  return (
    <MantineImage
      sizes="100vw"
      {...props}
      ref={ref}
      component={NextImage}
      className={clsx(classes.fill, classes.image, classes.responsive, className)}
    />
  );
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(render);

export default Image;
