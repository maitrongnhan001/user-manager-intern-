import { createReducer, on } from "@ngrx/store";
import * as userAction from '../actions/user.action';
import { UserModel } from "src/app/model/user.model";

export const initialState : UserModel[] = [
    {firstName: 'Mai', lastName: 'Nhan', email: 'maitrongnhan@gmail.com', phone: '0338535639', DOB: new Date(), status: 1},
    {firstName: 'Nguyen', lastName: 'Nguyen', email: 'nguyennguyen@gmail1.com', phone: '0338344766', DOB: new Date(), status: 2},
    {firstName: 'Ngueng Thi', lastName: 'Huong', email: 'nguyenthihuong@gmail2.com', phone: '0379114915', DOB: new Date(), status: 2},
    {firstName: 'Tran Tai', lastName: 'Nguyen', email: 'trantainguyen@gmail3.com', phone: '0346115968', DOB: new Date(), status: 1},
    {firstName: 'Vo Van', lastName: 'Anh', email: 'vovananh@gmail4.com', phone: '0372156715', DOB: new Date(), status: 2},
    {firstName: 'Nguyen Ngoc', lastName: 'Ly', email: 'nguyenngocly@gmail5.com', phone: '0342675966', DOB: new Date(), status: 1},
    {firstName: 'Tran Thi', lastName: 'Diem', email: 'tranthidiem@gmail6.com', phone: '0363570572', DOB: new Date(), status: 2},
    {firstName: 'Le Ngoc', lastName: 'Tho', email: 'lengoctho@gmail7.com', phone: '0868480588', DOB: new Date(), status: 2},
    {firstName: 'Tran Tuyet', lastName: 'Nhung', email: 'trantuyetnhung@gmail8.com', phone: '0352261174', DOB: new Date(), status: 2},
    {firstName: 'Nguyen Van', lastName: 'Linh', email: 'nguyenvanlinh@gmail9.com', phone: '0349189699', DOB: new Date(), status: 2},
    {firstName: 'Quach Thong', lastName: 'Thai', email: 'quachthongthai@gmail0.com', phone: '0382890539', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 11', email: 'maitrongnhan@gmail1.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 12', email: 'maitrongnhan@gmail2.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 13', email: 'maitrongnhan@gmail3.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 14', email: 'maitrongnhan@gmail4.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 15', email: 'maitrongnhan@gmail5.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 16', email: 'maitrongnhan@gmail6.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 17', email: 'maitrongnhan@gmail7.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 18', email: 'maitrongnhan@gmail8.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 19', email: 'maitrongnhan@gmail9.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 20', email: 'maitrongnhan@gmail0.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 21', email: 'maitrongnhan@gmail1.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 22', email: 'maitrongnhan@gmail2.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 23', email: 'maitrongnhan@gmail3.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 24', email: 'maitrongnhan@gmail4.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 25', email: 'maitrongnhan@gmail5.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 26', email: 'maitrongnhan@gmail6.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 27', email: 'maitrongnhan@gmail7.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 28', email: 'maitrongnhan@gmail8.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 29', email: 'maitrongnhan@gmail9.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 30', email: 'maitrongnhan@gmail0.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 31', email: 'maitrongnhan@gmail1.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 32', email: 'maitrongnhan@gmail2.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 33', email: 'maitrongnhan@gmail3.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 34', email: 'maitrongnhan@gmail4.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 35', email: 'maitrongnhan@gmail5.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 36', email: 'maitrongnhan@gmail6.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 37', email: 'maitrongnhan@gmail7.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 38', email: 'maitrongnhan@gmail8.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 39', email: 'maitrongnhan@gmail9.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 40', email: 'maitrongnhan@gmail0.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 41', email: 'maitrongnhan@gmail1.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 42', email: 'maitrongnhan@gmail2.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 43', email: 'maitrongnhan@gmail3.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 44', email: 'maitrongnhan@gmail4.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 45', email: 'maitrongnhan@gmail5.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 46', email: 'maitrongnhan@gmail6.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 47', email: 'maitrongnhan@gmail7.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 48', email: 'maitrongnhan@gmail8.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 49', email: 'maitrongnhan@gmail9.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 50', email: 'maitrongnhan@gmail0.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 51', email: 'maitrongnhan@gmail1.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 52', email: 'maitrongnhan@gmail2.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 53', email: 'maitrongnhan@gmail3.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 54', email: 'maitrongnhan@gmail4.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 55', email: 'maitrongnhan@gmail5.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 56', email: 'maitrongnhan@gmail6.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 57', email: 'maitrongnhan@gmail7.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 58', email: 'maitrongnhan@gmail8.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 59', email: 'maitrongnhan@gmail9.com', phone: '0123456789', DOB: new Date(), status: 1},
    {firstName: 'Mai', lastName: 'Nhan 60', email: 'maitrongnhan@gmail0.com', phone: '0123456789', DOB: new Date(), status: 1},
];

export const userReducer = createReducer(
    initialState,
    on(
        userAction.addUser,
        (state, {user}) => {
            let currentState = [...state];
            currentState.push(user);
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