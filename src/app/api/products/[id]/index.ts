import { NextResponse } from 'next/server';

import { products } from '@repository/hooks/products/__mocks__';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);

  if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
  }

  return NextResponse.json(product);
}
