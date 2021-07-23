import React, {useReducer} from 'react';
import {Alert} from 'react-native';
import {
  ADD_TODO,
  CLEAR_ERROR,
  FETCH_TODOS,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO,
} from '../../types/types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';
import {FIREBASE_URL} from '@env';
import {Http} from '../../http';

function TodoState({children}) {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = async () => {
    clearError();
    showLoader();
    const data = await Http.get(`${FIREBASE_URL}/todos.json`, showError);
    if (data) {
      const todos = Object.keys(data).map(key => ({...data[key], id: key}));
      dispatch({type: FETCH_TODOS, todos});
    }
    hideLoader();
  };

  const addTodo = async title => {
    clearError();
    const data = await Http.post(
      `${FIREBASE_URL}/todos.json`,
      {title},
      showError,
    );
    if (data) {
      dispatch({type: ADD_TODO, title, id: data.name});
    }
  };

  const updateTodo = async (id, title) => {
    clearError();
    const data = await Http.patch(
      `${FIREBASE_URL}/todos/${id}.json`,
      {title},
      showError,
    );
    if (data) {
      dispatch({type: UPDATE_TODO, id, title});
    }
  };

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
          onPress: async () => {
            const data = await Http.delete(
              `${FIREBASE_URL}/todos/${id}.json`,
              showError,
            );
            if (data) {
              dispatch({type: REMOVE_TODO, id});
            }
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const showLoader = () => dispatch({type: SHOW_LOADER});

  const hideLoader = () => dispatch({type: HIDE_LOADER});

  const showError = error => dispatch({type: SHOW_ERROR, error});

  const clearError = () => dispatch({type: CLEAR_ERROR});

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoState;
