import React, { Component } from "react";
import { Dimensions, Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class Card extends Component {
  render() {
    return (

      <View
        style={[
          styles.container,
          {
            backgroundColor: this.props.rowData.bgColor
          }
        ]}>
          <TouchableOpacity
            style={[
              {
                width: 15,
                height:15,
                marginLeft: Dimensions.get('window').width*.90,
              }
            ]}
            onPress={() => this.props.handleDestroyCard(this.props.rowData.id)}>
            <Text style={{color:"#ffffff",}}>X</Text>
          </TouchableOpacity>

        <Text style={{marginTop:5,height:40, fontSize:25,fontStyle: "italic"}}>{this.props.rowData.title}</Text>
        <Text style={{marginTop:20, flex:1, textAlign:'center', fontSize:20}}>{this.props.rowData.description}</Text>
      </View>
    );
  }
}

Card.propTypes = {
  handleDestroyCard: PropTypes.func,
  rowData: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 20,
    // height:150,
    flex:1,
  }
});

export default Card;
