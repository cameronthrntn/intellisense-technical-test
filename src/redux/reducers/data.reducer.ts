import { GET_DATA, ADD_TO_GRAPH, SORT_DATA, EMPTY_GRAPH, REMOVE_FROM_GRAPH } from '../constants/actionTypes';

const INITIAL_STATE = {
  table: [],
  graph: []
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state, table: action.payload,
      };
    case SORT_DATA:
      switch (action.payload) {
        case 'stringDESC':
          return {
            ...state, table: [...state.table].sort((a: any, b: any) => {
              const aName = a.name.toUpperCase();
              const bName = b.name.toUpperCase();
              if (aName < bName) {
                return -1;
              }
              return 1;
            })
          }
        case 'stringASC':
          return {
            ...state, table: [...state.table].sort((a: any, b: any) => {
              const aName = a.name.toUpperCase();
              const bName = b.name.toUpperCase();
              if (aName > bName) {
                return -1;
              }
              return 1;
            })
          }
        case 'numberDESC':
          return {
            ...state, table: [...state.table].sort(
              (a: any, b: any) =>
                b.values[b.values.length - 1] -
                a.values[a.values.length - 1]
            )
          }
        case 'numberASC':
          return {
            ...state, table: [...state.table].sort(
              (a: any, b: any) =>
                a.values[a.values.length - 1] -
                b.values[b.values.length - 1]
            )
          }
        default: return state;
      }
    case ADD_TO_GRAPH:
      return {
        ...state, graph: [...state.graph, action.payload]
      }
    case REMOVE_FROM_GRAPH:
      return {
        ...state, graph: state.graph.filter((data: any) => data.name !== action.payload)
      }
    case EMPTY_GRAPH:
      return {
        ...state, graph: []
      }
    default: return state;
  }
};

export default reducer;