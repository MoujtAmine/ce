import React, { Component } from 'react';
//import { ActivityIndicator, FlatList, Text, View } from 'react-native';
//import {getAllStudents} from './app/services/StudentService';
import Routes from './app/routes/Routes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /*getAllStudents()
    .then(response => {
      this.setState({data : response, isLoading : false});
      console.log("state", state)
    }).catch(error => {
      console.log("error", error);
    });*/
  }

  render() {
    //const { data, isLoading } = this.state;
    return (
      <Routes />
    );
  }
};
