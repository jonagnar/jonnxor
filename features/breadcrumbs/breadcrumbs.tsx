'use client';

import { Fragment } from 'react';
import {
  type BreadcrumbsProps as MantineBreadcrumbsProps,
  Breadcrumbs as MantineBreadcrumbs,
} from '@mantine/core';

import { Link } from '@/components/link/link';

import { usePathname } from '@/navigation';

export type BreadcrumbsProps = Partial<MantineBreadcrumbsProps>;

export function Breadcrumbs(props: BreadcrumbsProps) {
  const pathname = usePathname();

  const pathNames = pathname.split('/').filter((path) => path);

  return (
    <MantineBreadcrumbs {...props}>
      <Link href="/">JonnXor.is</Link>
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        return (
          <Fragment key={index}>
            <Link href={href}>{link}</Link>
          </Fragment>
        );
      })}
    </MantineBreadcrumbs>
  );
}
