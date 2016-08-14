import createStore from './store';
import reducer, { initAutocomplete } from './reducer';
import createController from './controller';
import createRenderer from './renderer';

const store = createStore(reducer);
const renderer = createRenderer();

export const start = data => {
    data.forEach(d => {
        const controller = createController(d.root, d.id, store.dispatch, renderer);
        store.subscribe(controller.render);
        store.dispatch(initAutocomplete(d.id, d.values, d.filterKeys));
    });
};
