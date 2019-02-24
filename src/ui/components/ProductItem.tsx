import React from 'react';

import brain from '../assets/img/brain.png';

const ProductItem: React.FC<{
  name: string;
  description: string;
  executedTimes: number;
}> = ({ name, description, executedTimes }) => (
  <div className="productitem">
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
  </div>
);

export default ProductItem;
