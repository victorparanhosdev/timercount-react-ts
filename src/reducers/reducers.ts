import {PropsTimer} from "../pages/Home/Home"


interface Cycles {
    dataTime: PropsTimer[];
    isActiveId: string | null;
  }

export enum ActionCycles{
    ADD_NEW_CICLE= "ADD_NEW_CICLE",
    INTERRUPTED= "INTERRUPTED"
}

export function ReducersFunctionCycle(state: Cycles, action: any) {
    if (action.type === ActionCycles.ADD_NEW_CICLE) {
      return {
        dataTime: [...state.dataTime, action.payload.DadosTimer],
        isActiveId: action.payload.DadosTimer.id,
      };
    }
    if (action.type === ActionCycles.INTERRUPTED) {
      return {
        dataTime: [...state.dataTime],
        isActiveId: null,
      };
    }

    return state;
  }