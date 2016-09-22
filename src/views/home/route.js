//Use require because Webpack does not support ES6 Modules
module.exports = {
    path: 'home',
    getComponent(nextState,cb){
        require.ensure([], function(require){
            cb(null, require('./components/homePage.jsx'), 'home');
        });
    }
};