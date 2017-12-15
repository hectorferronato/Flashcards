import React, { Component } from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  constructor(props) {
    super(props);

    // Bind functions below
    this.handleCreateCard = this.handleCreateCard.bind(this);
    this.randomizeColor = this.randomizeColor.bind(this);

    this.state = {
      title: 'Untitled', 
      description: '',
      bgColor: 'blue',
    };

  }

  handleCreateCard() {
    // Randomize card color
    const randomizedColor = this.randomizeColor();
    this.props.dispatch({ type: "ADD_CARD", title: this.state.title, description: this.state.description, bgColor: randomizedColor,});
    
    this.state.title = "Untitled";
    this.state.description = "";  
    this.refs["titleInput"].clear(0);
    this.refs["descriptionInput"].clear(0);
  }

  randomizeColor() {
    // Generate random color from array
    const colorArr = ["#2892b4", "#b44a28", "#28B490", "#dbd5c5", "#a77b67", "#d2beda"];
    const randColor = colorArr[Math.floor(Math.random() * colorArr.length)];

    // // Generate random number below 1000
    // const randNum = Math.floor(Math.random() * 1000 + 1);
    // const randName = "Item " + randNum;
    //return { name: randName, bgColor: randColor };
    
    return randColor;

  }

  render() {
    return (
      <View style={styles.container}>

            <TextInput
              style={{width: 200, color:"white", fontSize:13}}
              placeholder="Type Card title!"
              placeholderTextColor = "white"
              underlineColorAndroid = "white"
              ref={'titleInput'} 
              onChangeText={(text) => this.setState({title:text})}
            />

            <TextInput
              style={{height: 80, width: 200, color:"white", top:10, fontSize:15}}
              underlineColorAndroid = "white"
              placeholder="Type Card description!"
              placeholderTextColor = "white"
              multiline = {true}
              numberOfLines = {5}
              ref={'descriptionInput'} 
              onChangeText={(text) => this.setState({description:text})}
            />

        <View style={styles.header}>

          <View style={styles.left} />

          <View style={styles.middle}> 

            <TouchableOpacity onPress={() => this.handleCreateCard()}>
              <Text style={styles.textRight}>ADD CARD</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.right} />

        </View>

      </View>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    backgroundColor: "#181e29",
    paddingTop:20,
    paddingBottom:20
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom:20
  },
  left: {
    top: 40
  },
  middle: {
    top: 40
  },
  right: {
    top: 40
  },
  textRight: {
    color: "#efefef",
    fontWeight: "bold"
  }
});

export default connect()(Header);
