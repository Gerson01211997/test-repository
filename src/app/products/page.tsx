'use client';

import ListView from '@products/ListView';
import useTranslation from 'next-translate/useTranslation';
import { COMMON_NAMESPACE } from 'utils/constants';

export default function ProductsPage() {
  // Ejemplo para usar las traducciones
  const { t } = useTranslation(COMMON_NAMESPACE);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{t('products')}</h1>
      <ListView />
    </div>
  );
}
