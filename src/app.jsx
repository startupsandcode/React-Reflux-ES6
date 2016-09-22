import React from 'react';
import SharedStore from './views/shared/stores/sharedStore.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedStore: {},
            authToken: null,
            userProfile: null
        };
        this.onStoreChange = this.onStoreChange.bind(this);
    }
    componentWillMount(){
        this.setState({sharedStore: SharedStore.getStore()});
        this.unsubscribe = SharedStore.listen(this.onStoreChange);
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    onStoreChange(newState){
        this.setState({ sharedStore: newState });
    }
    render() {
        var self = this;
        var childrenWithProps = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                sharedStore: self.state.sharedStore
            })
        })

        return (<div>
            {childrenWithProps}
        </div>);
    }
}

export default App;