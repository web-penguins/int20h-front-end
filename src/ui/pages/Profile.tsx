import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/reducers';
import Button from '../components/Button';
import ProductItem from '../components/ProductItem';

const arr = [
  {
    name: 'Some name',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    executedTimes: 1,
  },
  {
    name: 'Some more name',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    executedTimes: 0,
  },
  {
    name: 'Cool name',
    description:
      'Sed ut perspiciatis unde omnis iste  ipsa quae ab illo inventore veritatis et quasi architecto. Nemo enim ipsam voluptatem quia  aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    executedTimes: 3,
  },
];

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
}> = ({ name, registerDate, productCount }) => (
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
            onClick={() => {
              return;
            }}
            text="Add"
            variant="green"
          />
        </div>
      </div>
      <div className="profile__products">
        {arr.map(item => (
          <ProductItem {...item} />
        ))}
      </div>
    </div>
  </div>
);

const getUserValue = (state: AppState, field: string) =>
  state.user.user ? (state.user.user as Record<string, any>)[field] : '';

export default connect((state: AppState) => ({
  name: getUserValue(state, 'name'),
  login: getUserValue(state, 'username'),
  productCount: getUserValue(state, 'totalAmountOfProducts'),
  registerDate: getUserValue(state, 'registerDate'),
}))(Profile);
