import API from "../api/api";
import React from "react";

class Deleteitems extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const res = await API.get("./users");
    this.setState({ data: res.data });
    console.log(this.state.data);
  }

  Del = async (id) => {
    try {
      await API.delete(`/users/${id}`);

      return this.setState({
        data: [...this.state.data].filter((el) => el.id !== id),
      });
    } catch (e) {}
  };

  render() {
    return (
      <div>
        <h1>Wellcome to employe data page</h1>

        <div className="datacontainer">
          {this.state.data.map((db) => {
            return (
              <div key={db.id} className="card">
                <div className="infoName">{db.name}</div>
                <div className="info">
                  <span>PHONE:</span>
                  {db.phone}
                </div>

                <div className="info">
                  <span>ADDRESS:</span>
                  {db.address}
                </div>

                <div className="dlt">
                  <button onClick={() => this.Del(db.id)}>DELETE</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Deleteitems;
