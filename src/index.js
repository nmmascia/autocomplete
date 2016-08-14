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
                random: 'hayyy',
            },
            {
                name: 'Kanye West',
                genre: 'Rap',
                random: 'ughhh',
            },
            {
                name: 'Sia',
                genre: 'Pop',
                random: 'wutt',
            },
        ],
        filterKeys: [
            'name',
            'genre',
            'random'
        ],
    }
]);
