import React from 'react';
import { Link } from 'react-router-dom';

import brain from '../assets/img/brain.png';

const ProductItem: React.FC<{
  productId: number;
  name: string;
  description: string;
  executedTimes: number;
}> = ({ productId, name, description, executedTimes }) => (
  <Link to={`/product/${productId}`} className="productitem">
    <div className="productitem__top">
      <div className="productitem__name">
        <img className="productitem__brain" src={brain} />
        {name}
      </div>
      <div className="productitem__executions">
        executed {executedTimes} times
      </div>
    </div>
    <div className="productitem__description">{description}</div>
  </Link>
);

export default ProductItem;
