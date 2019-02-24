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

              <h1>Example of photos</h1>
              {product.productId === 1 ? (
                <p className="three">
                  <img
                    src="http://blog.otoro.net/assets/20160401/png/mnist_input_0.png"
                    alt=""
                  />
                  <img
                    src="http://blog.otoro.net/assets/20160401/png/mnist_input_22.png"
                    alt=""
                  />
                  <img
                    src="http://blog.otoro.net/assets/20160401/png/mnist_output_5.png"
                    alt=""
                  />
                </p>
              ) : (
                <p className="one">
                  <img
                    src="http://community.datacamp.com.s3.amazonaws.com/community/production/ckeditor_assets/pictures/657/content_traffic_signs1.png"
                    alt=""
                  />
                </p>
              )}
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
