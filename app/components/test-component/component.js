import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';

export default class TestComponent extends Component {
    localProp = 'Internal string';
    bool = false;

    constructor() {
        console.log('initing');
        super();
    }

    @computed('localProp')
    get someThing() {
        return this.localProp;
    }

    @computed('something')
    get computedThing() {
        return this.get('someThing');
    }

    @action
    toggleBool() {
        this.set('bool', !this.bool);
        this.log();
    }

    @action 
    log() {
        console.log('sent action');
    }


}
