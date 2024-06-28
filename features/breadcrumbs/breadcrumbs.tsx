'use client';

import React from 'react';
import {
  type BreadcrumbsProps as MantineBreadcrumbsProps,
  Breadcrumbs as MantineBreadcrumbs,
  Title,
} from '@mantine/core';

import { Link } from '@/components/link/link';
import { usePathname } from '@/navigation';

import classes from './breadcrumbs.module.css';

export type BreadcrumbsProps = Partial<MantineBreadcrumbsProps>;

export function Breadcrumbs({ ...props }: BreadcrumbsProps) {
  const pathname = usePathname();

  const pathNames = pathname.split('/').filter((path) => path);

  return (
    <MantineBreadcrumbs separator="/" {...props}>
      <Link href="/" className={classes.link}>
        <Title component="div" size={16} className={classes.title}>
          JonnXor.is
        </Title>
      </Link>
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={index}>
            <Link href={href} className={classes.link}>
              <Title component="div" size={16} className={classes.title}>
                {link}
              </Title>
            </Link>
          </React.Fragment>
        );
      })}
    </MantineBreadcrumbs>
  );
}

export default Breadcrumbs;
