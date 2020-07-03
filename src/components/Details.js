import React, { Component } from "react";
import { getData } from "./helpers/helpers";
import ListItems from "./ListItem";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: {},
    };
  }

  componentDidMount() {
    getData(this.props.match.url).then((data) => {
      this.setState({ listData: data });
    });
  }
  render() {
    const list = this.state.listData;
    console.log(list)
    return (
        <React.Fragment>

          {/* <ListItems key={data.index} data={data} /> */}
          details
          {this.props.match.path}
        </React.Fragment>
    );
  }
}

export default Details;
