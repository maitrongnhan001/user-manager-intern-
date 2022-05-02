import { createReducer, on } from "@ngrx/store";
import * as userAction from '../actions/user.action';
import { UserModel } from "src/app/model/user.model";

export const initialState : UserModel[] = [];

export const userReducer = createReducer(
    initialState,
    on(
        userAction.addUser,
        (state, {user}) => {
            let currentState = [...state];
            currentState.unshift(user);
            return currentState;
        }
    ),
    on(
        userAction.addUsers,
        (state, {users}) => {
            let currentState = [...state];
            currentState = currentState.concat(users);
            return currentState;
        }
    ),
    on(
        userAction.updateUser,
        (state, {index, user}) => {
            let currentState = [...state];
            currentState[index] = user;
            return currentState;
        }
    ),
    on(
        userAction.deleteUser,
        (state, {index}) => {
            let currentState = [...state];
            currentState.splice(index, 1);
            return currentState;
        }
    ),
);