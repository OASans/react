import { combineReducers } from 'redux';

import modalReducer from './reducers/modalReducer'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer';
import squadReducer from './reducers/squadReducer';
import chartReducer from './reducers/chartReducer';
import taskReducer from './reducers/taskReducer';
import notificationReducer from './reducers/notificationReducer';


export default combineReducers({
    modalReducer,
    userReducer,
    projectReducer,
    squadReducer,
    chartReducer,
    taskReducer,
    notificationReducer,
});