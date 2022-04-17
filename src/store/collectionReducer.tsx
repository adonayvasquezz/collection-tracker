import { Action } from "redux";
import { CollectionForm } from "../interfaces/collection";

interface collections {
    collections:CollectionForm[]
}

const initialState = {
  collections: []
}

export const collectionReducer = (state:collections = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, collections: state.collections  }
        case 'EDIT':
            return { ...state, collections: state.collections  }
        case 'DELETE':
                return { ...state, collections: state.collections  }
        default:
            return state;
    }
}