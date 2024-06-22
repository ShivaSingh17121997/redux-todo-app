import { INCREMENT } from "./ActionTypes"




export const IncreaseAction = (payload) => {
    return { type: INCREMENT, payload: payload }
}