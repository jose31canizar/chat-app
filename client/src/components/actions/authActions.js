import { CHANGE_INPUT } from './type' ;

export const change_input = ({ key, value }) => {
  return {
    type:CHANGE_INPUT,
    payload:{ key, value }
  }
}
