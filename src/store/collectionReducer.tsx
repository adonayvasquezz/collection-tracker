import { CollectionForm } from "../interfaces/collection";

interface collections {
    collections:CollectionForm[]
}

interface actionInterface {
    type:string, 
    collection?:CollectionForm, 
    collections?:CollectionForm[]
}

const initialState = {
  collections: []
}

export const collectionReducer = (state:collections = initialState, action: actionInterface) => {
    let currentState = state.collections;
    
    switch (action.type) {
        case 'GET_ALL':
            console.log('En reducer GET_ALL: ', state);
            if (action.collections) {
                currentState = action.collections
            } 
            return { ...state, collections: currentState}
        case 'ADD':
            console.log('En reducer ADD: ', state);
            if (action.collection) {
                currentState.unshift(action.collection);
                console.log('Nuevo estado: ', currentState);
            }

            return { ...state, collections: currentState  }
        case 'EDIT':
            return { ...state, collections: state.collections  }
        case 'DELETE':
                return { ...state, collections: state.collections  }
        default:
            return state;
    }
}