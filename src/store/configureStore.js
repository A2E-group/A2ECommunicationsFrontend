import { createStore, applyMiddleware } from 'redux';//Import redux store and middle ware form redux
import thunkMiddleware from 'redux-thunk';//import middleware from redux thunk
import rootReducer from '../reducers/index';//import root reducer--> know how the root reducer should be

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);//create a store with thunk middleware

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}