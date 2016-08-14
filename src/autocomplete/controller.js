import { updateInput } from './reducer';

const filterByKeysAndInput = (input, values, keys) => {
    if (input === '') return [];

    return values
    .filter(value => {
        return keys.some(key => value[key].toLowerCase().startsWith(input.toLowerCase()));
    });
};

const createController = (root, id, dispatch, renderer) => {
    root.innerHTML = renderer.initialize(id);
    const input = document.getElementById(`ac-${id}-input`);
    const container = document.getElementById(`ac-${id}-container`);

    input.addEventListener('keyup', event => {
        dispatch(updateInput(id, event.target.value));
    });

    const render = state => {
        const { input, values, filterKeys } = state[id];

        if (input === '') {
            return container.innerHTML = renderer.blankState();
        }

        const filteredValues = filterByKeysAndInput(input, values, filterKeys);

        if (filteredValues.length === 0) {
            return container.innerHTML = renderer.noResults();
        }

        return container.innerHTML = renderer.results(filteredValues);
    };

    return {
        render,
    };
};

export default createController;
