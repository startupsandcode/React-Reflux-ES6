import Reflux from 'reflux';
import Immutable from 'immutable';
import SharedActions from '../actions/sharedActions.jsx';

let shared = Immutable.Map({
    title: 'Shared'
});

var SharedStore = Reflux.createStore({

    // Initial setup
    init: function () {
        this.listenToMany(SharedActions);
    },
    updateTitle: function (title) {
        //Immutable new instances everytime
        shared = shared.set('title', title);

        //Making JS for trigger in react
        this.trigger(shared);
    },
    getStore: function () {
        return shared;
    }
})

export default SharedStore;