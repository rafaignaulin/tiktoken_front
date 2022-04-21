import { AnyAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

type User = {
    name: string;
}


const initialState = {} as User;

export const UserReducer: Reducer<typeof initialState, AnyAction> = (state = initialState, action:AnyAction) => {
    switch (action.type){
        case 'test':
            return state;
        default:
            return state;
    }

}
