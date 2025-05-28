import { NextResponse } from 'next/server';
import { products } from 'services/repository/hooks/products/__mocks__';

export async function GET() {
  return NextResponse.json(products);
}
