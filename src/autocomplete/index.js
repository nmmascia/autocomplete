import { createStore } from './store';
import { reducer, initAutocomplete } from './reducer';
import { createController } from './controller';

const store = createStore(reducer);

export const start = data => {
    data.forEach(d => {
        const controller = createController(d.root, d.id, store.dispatch);
        store.subscribe(controller.render);
        store.dispatch(initAutocomplete(d.id, d.values, d.filterKeys));
    });
};
