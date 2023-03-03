export const RESET_NAME = 'RESET_NAME';
export const CANCEL_NAME = 'CANCEL_NAME';
export const SAVE_NAME = 'SAVE_NAME';
  
export function nameReset() {
    return {
        type: RESET_NAME,
    };
}

export function nameError(error) {
    return {
        type: LOGIN_ERROR,
        error,
    };
}

export function nameCanel(){
    return{
        type: CANCEL_NAME,
    }
}

export function nameSuccess() {
    return {
        type: SAVE_NAME_SUCESS,
    };
}