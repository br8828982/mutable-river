export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type Action = {
  type: ActionType;
  payload: number;
};

export type CounterState = number;

export interface CounterContextType {
  state: CounterState;
  increment: (payload: number) => void;
  de
}
