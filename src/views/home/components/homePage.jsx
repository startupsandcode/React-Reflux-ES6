import React from 'react';
import HomeActions from '../actions/homeActions.jsx';
import SharedActions from '../../shared/actions/sharedActions.jsx';
import HomeStore from '../stores/homeStore.jsx';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onStoreChange = this.onStoreChange.bind(this);
    }
    componentWillMount() {
        this.setState({ homeStore: HomeStore.getStore() });
        this.unsubscribe = HomeStore.listen(this.onStoreChange);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    onStoreChange(newState) {
        this.setState({ homeStore: newState });
    }
    getChangeValue(event) {
        HomeActions.statusUpdate(event.currentTarget.value);
    }
    updateTitle(event) {
        SharedActions.updateTitle(event.currentTarget.value);
    }
    render() {
        return <div>
            <h1 className="header">{this.props.sharedStore.get('title')}</h1>
            First Name: <input type="text" value={this.state.homeStore.get('firstName') } onChange={this.getChangeValue} />
            New Title: <input type="text" value={this.props.sharedStore.get('title') } onChange={this.updateTitle} />
            <button onClick={HomeActions.writeConsole}>Click me</button>
        </div>;
    }
}

export default HomePage;
