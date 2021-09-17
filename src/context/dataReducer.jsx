export const IS_FETCHING = 'IS_FETCHING'

export const HAS_ACCOUNT = 'HAS_ACCOUNT'

export const ON_NAME_CHANGE_CREATE = 'ON_NAME_CHANGE'
export const ON_LAST_NAME_CHANGE_CREATE = 'ON_LAST_NAME_CHANGE_CREATE'
export const ON_EMAIL_CHANGE_CREATE = 'ON_EMAIL_CHANGE_CREATE'
export const ON_PASSWORD_CHANGE_CREATE = 'ON_PASSWORD_CHANGE_CREATE'
export const ON_SEND_FORM_CREATE = 'ON_SEND_FORM_CREATE'

export const WRONG_DATAN = 'WRONG_DATAN'
export const WRONG_DATAL = 'WRONG_DATAL'
export const WRONG_DATAE = 'WRONG_DATAE'
export const WRONG_DATAP = 'WRONG_DATAP'

export const ON_EMAIL_CHANGE_LOGIN = 'ON_EMAIL_CHANGE_LOGIN'
export const ON_PASSWORD_CHANGE_LOGIN = 'ON_PASSWORD_CHANGE_LOGIN'
export const ON_SEND_FORM_LOGIN = 'ON_SEND_FORM_LOGIN'

export const WRONG_LOGINE = 'WRONG_LOGINE'
export const WRONG_LOGINP = 'WRONG_LOGINP'

export const CHAT_INPUT_CHANGE = 'CHAT_INPUT_CHANGE'
export const ON_INPUT_SEND = 'ON_INPUT_SEND'

export const SING_OUT = 'SING_OUT'
export const SING_IN = 'SING_OUT'
debugger

export const dataReducer = (state, action) => {
   debugger
   switch (action.type) {
      case HAS_ACCOUNT:
         return { ...state }
      case ON_NAME_CHANGE_CREATE:
         return { ...state, nameCreate: action.nameValue,wrongName:action.wrongName }
      case ON_LAST_NAME_CHANGE_CREATE:
         return { ...state, lastNameCreate: action.lastNameValue,wronLastName:action.wronLastName }
      case ON_EMAIL_CHANGE_CREATE:
         return { ...state, emailCreate: action.emailValue,wrongEmail:action.wrongEmail }
      case ON_PASSWORD_CHANGE_CREATE:
         return { ...state, passwordCreate: action.passwordValue,wrongPassword:action.wrongPassword }
      case ON_SEND_FORM_CREATE:
         return {
            ...state, nameCreate: action.nameValue, lastNameCreate: action.lastNameValue, emailCreate: action.emailValue, passwordCreate: action.passwordValue, isRegister:action.isRegister,
            wrongName: action.wrongName,
            wronLastName: action.wronLastName,
            wrongEmail: action.wrongEmail,
            wrongPassword: action.wrongPassword
         }
      
      case ON_EMAIL_CHANGE_LOGIN:
         return{...state,emailLog:action.emailValueLog, wrongEmail: action.wrongEmail}
      case ON_PASSWORD_CHANGE_LOGIN:
         return{...state,passwordLog:action.passwordValueLog,  wrongPassword: action.wrongPassword}
      case ON_SEND_FORM_LOGIN:
         return{...state,emailLog:action.emailLog,passwordLog:action.passwordLog,isRegister:action.isRegister}

      case WRONG_DATAN:
         return { ...state, wrongName: action.wrongName }
      case WRONG_DATAL:
         return { ...state, wronLastName: action.wronLastName }
      case WRONG_DATAE:
         return { ...state, wrongEmail: action.wrongEmail }
      case WRONG_DATAP:
         return { ...state, wrongPassword: action.wrongPassword }

      case CHAT_INPUT_CHANGE:
         return{...state, inputChat:action.inputChat}
      case ON_INPUT_SEND:
         return{...state, inputChat:action.inputChat}

      case SING_OUT:
         return{...state, isRegister:action.isRegister}

      
      case IS_FETCHING:
         return{...state, isFetching:true}


      default:
         return { ...state };
   }
}