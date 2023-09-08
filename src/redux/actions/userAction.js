import { CHANGE_NAME, CHANGE_SURNAME, CHANGE_EMAIL, CHANGE_PHONE_NUMBER } from "./actionTypes"

export const changeName = payload =>{
    return {type: CHANGE_NAME, payload: payload};
}
export const changeSurname = payload =>{
    return {type: CHANGE_SURNAME, payload: payload};
}
export const changeEmail = payload =>{
    return {type: CHANGE_EMAIL, payload: payload};
}
export const changePhoneNumber = payload =>{
    return {type: CHANGE_PHONE_NUMBER, payload: payload};
}