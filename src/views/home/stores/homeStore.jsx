import Reflux from 'reflux';
import Immutable from 'immutable';
import HomeActions from '../actions/homeActions.jsx';

let home = Immutable.Map({
    firstName: 'John'
});

var HomeStore = Reflux.createStore({

    // Initial setup
    init: function () {
        this.listenToMany(HomeActions);
    },
    statusUpdate: function (firstName) {
        //Immutable new instances everytime
        home = home.set('firstName', firstName);

        //Making JS for trigger in react
        this.trigger(home);
    },
    writeConsole: function(){
        console.log('logIt');
    },
    getStore: function () {
        return home;
    }
})

export default HomeStore;