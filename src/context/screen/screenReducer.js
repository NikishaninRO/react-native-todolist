import {CHANGE_SCREEN} from '../../types/types';

const handlers = {
  [CHANGE_SCREEN]: (state, todoId) => todoId,
  DEFAULT: state => state,
};

export const screenReducer = (state, action) => {
  return handlers[action.type](state, action.todoId) || handlers.DEFAULT();
};
