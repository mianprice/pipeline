let INITIAL_STATE = {
    targets: []
};

export default function reducer(state = INITIAL_STATE, action) {
    if (action.type === 'delete_target') {
        return Object.assign(INITIAL_STATE);
    }
    return state;
};
