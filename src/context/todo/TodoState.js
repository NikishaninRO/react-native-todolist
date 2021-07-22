import React, {useReducer} from 'react';
import {Alert} from 'react-native';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../../types/types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

function TodoState({children}) {
  const initialState = {
    todos: [{id: '1', title: 'Выучить React Native'}],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = title => dispatch({type: ADD_TODO, title});
  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});
  const removeTodo = id => {
    const todo = state.todos.find(todo => todo.id === id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${todo.title}`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            dispatch({type: REMOVE_TODO, id});
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoState;
