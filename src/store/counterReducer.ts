import { CounterState, CounterAction, ActionType } from "../types/CounterTypes";

export const incrementAction = (number: number): CounterAction => ({
  type: ActionType.INCREMENT,
  payload: { number },
});

export const decrementAction = (number: number): CounterAction => ({
  type: ActionType.DECREMENT,
  payload: { number },
});

export const resetAction = (): CounterAction => ({
  type: ActionType.RESET,
});

export const initialState: CounterState = 0;

export function counterReducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + action.payload.number;
    case ActionType.DECREMENT:
      return state - action.payload.number;
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
}
