import { createAction, props } from "@ngrx/store";
import { UserModel } from "src/app/model/user.model";

export const addUser = createAction(
    '[user] add',
    props<{user: UserModel}>()
);

export const updateUser = createAction(
    '[user] update',
    props<{index: number, user: UserModel}>()
);

export const deleteUser = createAction(
    '[user] remove',
    props<{index: number}>()
);