import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

import { Modal } from '@/components/modal/modal';
import { Image } from '@/components/image/image';

import pro from '@/public/pro.jpg';
import cool from '@/public/cool.jpg';

type Props = { params: { locale: string; id: number } };

const images = [
  { id: 1, src: pro },
  { id: 2, src: cool },
];

export default function ModalPage({ params: { locale, id } }: Props) {
  unstable_setRequestLocale(locale);

  const { src } = images.find((image) => image.id === id) || notFound();

  return (
    <Modal>
      <Image src={src} alt="Jón Agnar (Xor) Stefánsson" />
    </Modal>
  );
}
