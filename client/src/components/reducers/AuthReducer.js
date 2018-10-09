import { CHANGE_INPUT } from '../actions/type' ;


const INITIAL_STATE = { email:'' }

export default (state = INITIAL_STATE, action) => {

  console.log(action) ;
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, [action.payload.key]:action.payload.value };
    default:
      return state ;
  }

}
