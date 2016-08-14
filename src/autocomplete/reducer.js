const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_AUTOCOMPLETE': {
            return {
                ...state,
                [action.payload.id]: {
                    input: '',
                    values: action.payload.values,
                    filterKeys: action.payload.filterKeys,
                },
            };
        }
        case 'UPDATE_INPUT': {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    input: action.payload.input,
                },
            };
        }
        case 'SET_VALUES': {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    values: [
                        ...state[action.payload.id].values,
                        ...action.payload.values,
                    ],
                },
            };
        }
        default: {
            return state;
        }
    }
};

export const initAutocomplete = (id, values, filterKeys) => ({
    type: 'INIT_AUTOCOMPLETE',
    payload: { id, values, filterKeys },
});

export const updateInput = (id, input) => ({
    type: 'UPDATE_INPUT',
    payload: { id, input },
});

export const setValues = (id, values) => ({
    type: 'SET_VALUES',
    payload: { id, values },
});

export default reducer;
