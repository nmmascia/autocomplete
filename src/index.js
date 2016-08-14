import { start } from 'autocomplete';

import './styles.css';

start([
    {
        id: 1,
        root: document.getElementById('autocomplete'),
        values: [
            {
                name: 'Thrice',
                genre: 'Rock',
            },
            {
                name: 'Kanye West',
                genre: 'Rap',
            },
            {
                name: 'Sia',
                genre: 'Pop',
            },
        ],
        filterKeys: [
            'name',
            'genre',
        ],
    },
]);
