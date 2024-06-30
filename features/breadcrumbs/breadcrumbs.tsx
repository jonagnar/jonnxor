'use client';

import React from 'react';
import {
  type BreadcrumbsProps as MantineBreadcrumbsProps,
  Breadcrumbs as MantineBreadcrumbs,
  Title,
} from '@mantine/core';

import { Link } from '@/components/link/link';

import classes from './breadcrumbs.module.css';

export type BreadcrumbsProps = Partial<MantineBreadcrumbsProps>;

export function Breadcrumbs({ ...props }: BreadcrumbsProps) {
  return (
    <MantineBreadcrumbs separator="/" {...props}>
      <Link href="/" className={classes.link}>
        <Title component="div" size={16} className={classes.title}>
          JonnXor.is
        </Title>
      </Link>
    </MantineBreadcrumbs>
  );
}

export default Breadcrumbs;
