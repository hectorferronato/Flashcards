import React, { Component } from "react";
import { StyleSheet, ListView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "./Card";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.handleDestroyCard = this.handleDestroyCard.bind(this);
  }

  handleDestroyCard(id) {
    this.props.dispatch({ type: "REMOVE_CARD", id });
  }

  render() {
    return (
      <ListView
        style={styles.container}
        enableEmptySections={true}
        dataSource={this.props.dataSource}
        renderRow={rowData => {
          return (
            <Card
              rowData={rowData}
              handleDestroyCard={id => this.handleDestroyCard(id)}
            />
          );
        }}
      />
    );
  }
}

// Handle data source change from redux store
const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

function mapStateToProps(state) {
  return {
    dataSource: dataSource.cloneWithRows(state.cards)
  };
}

CardList.propTypes = {
  dataSource: PropTypes.object,
  dispatch: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef"
  }
});

export default connect(mapStateToProps)(CardList);
