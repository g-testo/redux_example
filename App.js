import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect, Provider} from 'react-redux'
import { createStore } from 'redux';

const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count: state.count + 1}
  } else if (action.type === types.DECREMENT) {
    return {count: state.count - 1}
  }
  return state
}
const initialState = {count: 5};

const store = createStore(reducer, initialState);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
  }

  _addFunction = () => {
    store.dispatch({type: types.INCREMENT});
    this.setState(previousState => {
      return { count: store.getState().count };
    });
  }
  _minusFunction = () => {
    store.dispatch({type: types.DECREMENT});
    this.setState(previousState => {
      return { count: store.getState().count };
    });
  }

  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button onPress={this._addFunction} title="Add" />
          <Button onPress={this._minusFunction} title="Minus" />
          <Text>{this.state.count}</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addAction: () => dispatch({type: types.INCREMENT}),
//     minusAction: () => dispatch({type: types.DECREMENT})
//   }
// }
//
//
// const countAmount = connect(
// mapStateToProps,
// mapDispatchToProps,
// )(App)
//
