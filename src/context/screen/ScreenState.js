import React, {useReducer} from 'react';
import {CHANGE_SCREEN} from '../../types/types';
import {ScreenContext} from './screenContext';
import {screenReducer} from './screenReducer';

function ScreenState({children}) {
  const [state, dispatch] = useReducer(screenReducer, null);
  const changeScreen = todoId => dispatch({type: CHANGE_SCREEN, todoId});
  return (
    <ScreenContext.Provider value={{todoId: state, changeScreen}}>
      {children}
    </ScreenContext.Provider>
  );
}

export default ScreenState;
