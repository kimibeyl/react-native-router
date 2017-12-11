import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Tab from './src/tabs/tab';
import Tab1 from './src/tabs/tab.1';
import Tab2 from './src/tabs/tab.2';
import Tab3 from './src/tabs/tab.3';
import Tab4 from './src/tabs/tab.4';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from './src/redux/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link
            to="/"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
              <Text>Tab</Text>
          </Link>
          <Link
            to="/tab1"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
              <Text>Tab1</Text>
          </Link>
          <Link
            to="/tab2"
            underlayColor='#f0f4f7'
            style={styles.navItem} >
              <Text>Tab2</Text>
          </Link>
          <Link
            to="/tab3"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
              <Text>Tab3</Text>
          </Link>
          <Link
            to="/tab4"
            underlayColor='#f0f4f7'
            style={styles.navItem} >
              <Text>Tab4</Text>
          </Link>
        </View>
        <Route exact path="/" component={Tab}/>
        <Route path="/tab1" component={Tab1}/>
        <Route path="/tab2" component={Tab2}/>
        <Route path="/tab3" component={Tab3}/>
        <Route path="/tab4" component={Tab4}/>
      </View>
    </NativeRouter>
    </Provider>
  )};
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: 'center',
    fontSize: 15
  }
});