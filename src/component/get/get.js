import React from "react";
import API from "../api/api";

class Getdata extends React.Component {
  state = { data: [], num: 0 };

  async componentDidMount() {
    const res = await API.get("./users");
    this.setState({ data: res.data });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <h1>Wellcome to Front end crash course</h1>

      { this.state.data.map((el)=><div>{el.name}</div>)}
      </div>
    );
  }
}

export default Getdata;
