import { Collection } from "../interfaces/collection";

interface collections {
    collections:Collection[]
}

interface actionInterface {
    type:string, 
    collection?:Collection, 
    collections?:Collection[]
}

const initialState = {
  collections: []
}

export const collectionReducer = (state:collections = initialState, action: actionInterface) => {
    let currentState = state.collections;
    
    switch (action.type) {
        case 'GET_ALL':
            if (action.collections) {
                currentState = action.collections
            } 
            return { ...state, collections: currentState}
        case 'ADD':
            if (action.collection) {
                currentState.unshift(action.collection);
            }

            return { ...state, collections: currentState  }
        case 'EDIT':
            if (action.collection) {
                let dataEdited = state.collections.map((e:Collection) => e._id===action.collection?._id ? action.collection : e);
                currentState = dataEdited;
                //console.log('Edit estado: ', currentState, action.collection);
            }
            return { ...state, collections: currentState  }
        case 'DELETE':
            if (action.collection) {
                let dataDelete = state.collections.filter(e => e._id !== action.collection?._id);
                currentState = dataDelete;
            }
            return { ...state, collections: currentState  }
        default:
            return state;
    }
}