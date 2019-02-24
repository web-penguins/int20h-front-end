import React, { useReducer, useState } from 'react';
import Button from '../Button';
import CheckBox from '../CheckBox';
import TextInput from '../TextInput';
import { cloneArray } from './utils';

const initState = [];

const changeName = (arr, index, value) => {
  const newArr = cloneArray(arr);
  newArr[index].name = value;
  return newArr;
};

const changeDesc = (arr, index, value) => {
  const newArr = cloneArray(arr);
  newArr[index].description = value;
  return newArr;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [...state, { name: '', description: '', inputType: 'photo' }];
    case 'SET_NAME':
      return changeName(state, action.payload.index, action.payload.value);
    case 'SET_DESC':
      return changeDesc(state, action.payload.index, action.payload.value);
    default:
      return state;
  }
};

const SecondStep = ({ onSubmit }) => {
  const [keras, setKeras] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);
  const submit = () => onSubmit(state);
  return (
    <div className="secondstep">
      <CheckBox checked={keras} onChange={setKeras} label="Keras" />
      <div
        className={`secondstep__wrapper ${
          keras ? 'secondstep__wrapper_open' : ''
        }`}
      >
        <form onSubmit={submit}>
          <div className="secondstep__title">
            Options:{' '}
            <Button
              onClick={() => dispatch({ type: 'ADD_OPTION', payload: null })}
              text="Add"
              variant="green"
            />
          </div>
          <div className="secondstep__options">
            {state.map((item, index) => (
              <div className="secondstep__option" key={index}>
                <div className="step__row">
                  <div className="step__desc">Name:</div>
                  <TextInput
                    type="text"
                    value={item.name}
                    onChange={e =>
                      dispatch({
                        type: 'SET_NAME',
                        payload: { index, value: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="step__row">
                  <div className="step__desc">Description:</div>
                  <TextInput
                    type="text"
                    value={item.description}
                    onChange={e =>
                      dispatch({
                        type: 'SET_DESC',
                        payload: { index, value: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="step__row">
                  <div className="step__desc">Type:</div>
                  <select value="photo" readOnly className="step_select">
                    <option value="string">String</option>
                    <option value="photo">Photo</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={submit} text="Next" className="step__btn" />
        </form>
      </div>
    </div>
  );
};

export default SecondStep;
