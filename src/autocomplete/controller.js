import Mustache from 'mustache';

import { updateInput } from './reducer';

const filterByKeysAndInput = (input, values, keys) => {
    if (input === '') return [];

    return values
    .filter(value => {
        return keys.some(key => value[key].toLowerCase().startsWith(input.toLowerCase()));
    })
};

export const createController = (root, id, dispatch) => {
    const input = document.createElement('input');
    input.classList = 'autocomplete-input';

    const container = document.createElement('div');
    container.classList = 'autocomplete-anchor';

    root.appendChild(input);
    root.appendChild(container);

    input.addEventListener('keyup', event => {
        dispatch(updateInput(id, event.target.value));
    });

    const render = state => {
        const { input, values, filterKeys } = state[id];

        if (input === '') {
            return container.innerHTML = '';
        }

        const filteredValues = filterByKeysAndInput(input, values, filterKeys);

        if (filteredValues.length === 0) {
            return container.innerHTML = '<div>There are no results</div>';
        }

        container.innerHTML = Mustache.render(
            `<div class="autocomplete-suggestion-container">
                {{#values}}
                    <div class="autocomplete-suggestion">
                        <span>{{name}}</span>
                        <span>{{genre}}</span>
                    </div>
                {{/values}}
            </div>`,
            { values: filteredValues },
        );
    };

    return {
        render,
    };
};
