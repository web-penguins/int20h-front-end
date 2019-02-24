import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/reducers';
import { ProductsState } from '../../store/reducers/products';
import ProductItem from '../components/ProductItem';
import TextInput from '../components/TextInput';

const Search: React.FC<{ products: ProductsState }> = products => {
  const [query, setQuery] = useState('');
  return (
    <div className="search">
      <TextInput
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
        className="search__field"
      />
      <div className="search__products">
        {products.products.products
          ? products.products.products.map(item => <ProductItem {...item} />)
          : ''}
      </div>
    </div>
  );
};

export default connect((state: AppState) => ({
  products: state.products,
}))(Search);
