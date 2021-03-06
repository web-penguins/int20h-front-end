import React, { useState } from 'react';
import { connect } from 'react-redux';
import { InputViewModel } from '../../services/models/Input';
import { OutputViewModel } from '../../services/models/Output';
import { createProduct as createProductAction } from '../../store/actions/products';
import { AppState } from '../../store/reducers';
import { ProductsState } from '../../store/reducers/products';
import Button from '../components/Button';
import StepForm from '../components/create-product-form/StepForm';
import Modal from '../components/Modal';
import ProductItem from '../components/ProductItem';

const placeholder = (
  <div className="products__placeholder">
    There no products here yet.
    <Button
      onClick={() => {
        return;
      }}
      text="Create!"
      variant="green"
      className="products__placeholder--button"
    />
  </div>
);

const Profile: React.FC<{
  name: string;
  registerDate: Date;
  productCount: number;
  products: ProductsState;
  createProduct: (
    name: string,
    desc: string,
    input: InputViewModel,
    output: OutputViewModel,
    files: File[]
  ) => void;
}> = ({ name, registerDate, productCount, createProduct, products }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="profile">
        <div className="profile__left">
          <div className="profile__photo">
            <img src="/img/default-non-user-no-photo.jpg" />
          </div>
          <div className="profile__name">{name}</div>
          <div className="hr profile__hr" />
          <div className="profile__data">
            <span>Registered on: </span>
            {registerDate}
          </div>
          <div className="profile__data">
            <span>Products released: </span>
            {productCount}
          </div>
        </div>
        <div className="profile__right">
          <div className="profile__topbar">
            <div className="profile__title">Products:</div>
            <div className="profile__action">
              <Button
                onClick={() => setModalOpen(true)}
                text="Add"
                variant="green"
              />
            </div>
          </div>
          <div className="profile__products">
            {products.products
              ? products.products.map(item => <ProductItem {...item} />)
              : placeholder}
          </div>
        </div>
      </div>
      <Modal open={modalOpen}>
        <StepForm
          complete={data => {
            createProduct(
              data.name,
              data.description,
              data.inputs,
              data.outputs,
              data.files
            );
            setModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

const getUserValue = (state: AppState, field: string) =>
  state.user.user ? (state.user.user as Record<string, any>)[field] : '';

export default connect(
  (state: AppState) => ({
    name: getUserValue(state, 'name'),
    login: getUserValue(state, 'username'),
    productCount: getUserValue(state, 'totalAmountOfProducts'),
    registerDate: getUserValue(state, 'registerDate'),
    products: state.products,
  }),
  {
    createProduct: createProductAction,
  }
)(Profile);
