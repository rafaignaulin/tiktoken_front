import { Dispatch } from "redux"

export const setUser = (payload) => (dispatch:Dispatch) => {
    dispatch({
        type: 'string', payload
    })
}