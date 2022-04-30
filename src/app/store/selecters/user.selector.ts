import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserModel } from "src/app/model/user.model";

export interface UserState {
    readonly users: UserModel[];
}

export const selectUserState = createFeatureSelector<UserModel[]>('user');

export const selectUserById = createSelector(
    selectUserState,
    (users: UserModel[], props: {index: number}) => users[props.index]
);

export const selectUserLimit = createSelector(
    selectUserState,
    (users: UserModel[], props: {index: number}) => {
        return [...users].splice(props.index, 10)
    }
);

export const selectQuantityUser = createSelector(
    selectUserState,
    (users: UserModel[]) => users.length
)

export const searchUser = createSelector(
    selectUserState,
    (users: UserModel[], props: {searchContent: string}) => {
        let userClone = [...users];
        return userClone.filter(Element => `${Element.firstName} ${Element.lastName}`.search(props.searchContent) != -1);
    }
)