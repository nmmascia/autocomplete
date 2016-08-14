export const createStore = reducer => {
    let state = {};
    const listeners = [];

    const subscribe = fn => {
        listeners.push(fn);
    };

    const update = next => {
        state = next;
        listeners.forEach(fn => fn(state));
    };

    const dispatch = action => {
        update(reducer(state, action));
    };

    return {
        dispatch,
        subscribe,
        update,
    };
};
