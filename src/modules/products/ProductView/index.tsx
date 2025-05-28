import ProductModal from 'modules/components/Modal';
import type React from 'react';
import { memo, useState } from 'react';
import type { ProductViewProps } from './types';

const ProductView: React.FC<ProductViewProps> = ({ price, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        data-testid="view-product-button"
      >
        Ver Descripción
      </button>

      <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="prose text-gray-900">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </ProductModal>
    </div>
  );
};

export default memo(ProductView);
