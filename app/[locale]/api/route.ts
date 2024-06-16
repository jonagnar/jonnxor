import { NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';

export async function GET(request: Request) {
  // Example: Receive the `locale` via a search param
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale');

  const t = await getTranslations({ locale, namespace: 'API' });
  return NextResponse.json({ title: t('text') });
}
