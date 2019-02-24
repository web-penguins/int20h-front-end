import React from 'react';
import { connect } from 'react-redux';
import ProductViewModel from '../../services/models/Product';
import { AppState } from '../../store/reducers';
import Button from '../components/Button';

interface Props {
  product: ProductViewModel;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <div className="product-inputs">
        {product.inputs.map(inp => {
          return (
            <div className="product-input">
              <label htmlFor={inp.name} />
              <input
                key={inp.name}
                id={inp.name}
                type={inp.inputType === 'string' ? 'string' : 'file'}
              />
              <p>{inp.description}</p>
            </div>
          );
        })}
      </div>
      <Button text="Execute" onClick={() => {}} />
    </div>
  );
};

const mapStateToProps = (state: AppState, ownProps: any): Props => ({
  product: state.products.products!.filter(
    pr => pr.productId === Number(ownProps.match.params.productId)
  )[0],
});

export default connect(mapStateToProps)(Product);
