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
            <div key={inp.name} className="product-input">
              <label htmlFor={inp.name}>Input name: {inp.name}</label>
              <input
                id={inp.name}
                type={inp.inputType === 'string' ? 'string' : 'file'}
                placeholder=""
              />
              <p>{inp.description}</p>

              {/* <h1>Product description</h1>
              {
                product.productId === 1 ? <p></p> : <p></p>
              } */}
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
