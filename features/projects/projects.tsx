'use client';

import { useTranslations } from 'next-intl';
import {
  Box,
  Title,
  TableScrollContainer,
  Table,
  TableTbody,
  TableTr,
  TableTh,
  TableTd,
  Anchor,
  TableCaption,
  Stack,
} from '@mantine/core';

export function Projects() {
  const t = useTranslations();

  return (
    <Box>
      <Title order={3} mb="sm">
        {t('projects.title')}
      </Title>
      <TableScrollContainer type="native" minWidth="100%">
        <Table
          captionSide="top"
          verticalSpacing="xs"
          horizontalSpacing="md"
          withColumnBorders={false}
          withTableBorder
          style={{ borderRight: 0, borderLeft: 0 }}
        >
          <TableCaption mb="xs" mx="md" style={{ textAlign: 'left' }}>
            {t('projects.caption')}
          </TableCaption>
          <TableTbody>
            <TableTr>
              <TableTh scope="row">{t('projects.advania')}</TableTh>
              <TableTd>
                <Anchor
                  fz="sm"
                  href="https://play.google.com/store/apps/details?id=is.advania.smastundapp"
                  target="_blank"
                >
                  {t('projects.smastund')}
                </Anchor>
                <br />
                {t('projects.separator')}{' '}
                <Anchor
                  fz="sm"
                  href="https://play.google.com/store/apps/details?id=com.cata"
                  target="_blank"
                >
                  {t('projects.cata')}
                </Anchor>
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTh scope="row">
                {t.rich('projects.or', {
                  p: (chunks) => chunks,
                  br: () => <br />,
                })}
              </TableTh>
              <TableTd>{t('projects.alheidur')}</TableTd>
            </TableTr>
            <TableTr bd={1}>
              <TableTh scope="row">{t('projects.arion')}</TableTh>
              <TableTd>
                <Anchor fz="sm" href="https://www.arionbanki.is" target="_blank">
                  {t('projects.arionbank')}
                </Anchor>
              </TableTd>
            </TableTr>
          </TableTbody>
        </Table>
      </TableScrollContainer>
    </Box>
  );
}

export default Projects;
