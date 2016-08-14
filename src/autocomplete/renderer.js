import Mustache from 'mustache';

const createRenderer = () => {
    const initialize = id => {
        return Mustache.render(`
            <input id="ac-{{id}}-input" class="ac-input" type="text" />
            <div id="ac-{{id}}-container" class="ac-anchor"></div>
        `, { id });
    };

    const blankState = () => {
        return Mustache.render(`
            <div class="ac-blank">Begin typing to find results.</div>
        `);
    }

    const noResults = () => {
        return Mustache.render(`
            <div class="ac-no-results">There were no results found.</div>
        `);
    };

    const results = values => {
        return Mustache.render(`
            <div class="ac-suggestion-container">
                {{#values}}
                    <div class="ac-suggestion">
                        <span>{{name}}</span>
                        <span>{{genre}}</span>
                    </div>
                {{/values}}
            </div>
        `, { values });
    };

    return {
        initialize,
        blankState,
        noResults,
        results,
    };
};

export default createRenderer;

