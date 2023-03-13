import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Screens
import Login from './screens/Login';
import Register from './screens/Register';
import EventList from './screens/EventList';
import ActivityScreen from './screens/ActivityScreen';
import EventDetails from './screens/EventDetails';
import Feed from './screens/Feed'
import ViewProfile from './screens/ViewProfile'
import test from './screens/test'
import Leaderboard from './screens/Leaderboard'
import CreateEvent from './screens/CreateEvent'


const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="MainTab" component={TabController} options={{ headerShown: true }} />
          <RootStack.Screen name="MainStack" component={StackController} />
        </RootStack.Navigator>
      </NavigationContainer >
    );
  }
};

function StackController() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function EventStack() {
  return (
    <Stack.Navigator headerMode="screen" >
      <Stack.Screen name="Events" component={EventList} />
      <Stack.Screen name="Event Details" component={EventDetails} />
      <Stack.Screen name="Create Event" component={CreateEvent} />
    </Stack.Navigator>
  );

}

function ProfileStack() {
  return (
    <Stack.Navigator headerMode="screen" >
      <Stack.Screen name="Profile" component={ViewProfile} />
      <Stack.Screen name="Event Name" component={EventDetails} />
    </Stack.Navigator>
  );

}
function FeedStack() {
  return (
    <Stack.Navigator headerMode="screen" >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );


}
function ActivityStack() {
  return (
    <Stack.Navigator headerMode="screen" >
      <Stack.Screen name="Activity" component={ActivityScreen} />
    </Stack.Navigator>
  );


}
function BoardStack() {
  return (
    <Stack.Navigator headerMode="screen" >
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
  );


}
function TabController() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Leaderboard" component={BoardStack} options={{ tabBarIcon: ({ color }) => (<Icon name="trophy" color={color} size={20}></Icon>) }} />
      <Tab.Screen name="Feed" component={FeedStack} options={{ tabBarIcon: ({ color }) => (<Icon name="clipboard-list" color={color} size={20}></Icon>) }} />
      <Tab.Screen name="Events" component={EventStack} options={{ tabBarIcon: ({ color }) => (<Icon name="running" color={color} size={20}></Icon>) }} />
      <Tab.Screen name="Activity" component={ActivityStack} options={{ tabBarIcon: ({ color }) => (<FeatherIcon name="activity" color={color} size={20}></FeatherIcon>) }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarIcon: ({ color }) => (<FeatherIcon name="user" color={color} size={20}></FeatherIcon>) }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
});