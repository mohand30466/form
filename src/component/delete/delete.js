import API from "../api/api";
import React from "react";
import './delete.css'

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
        <h1>Wellcome to employe data page: i have {this.state.data.length} student</h1>

        <div className="datacontainer">
          {this.state.data.map((db) => {
            return (
              <div key={db.id} className="card">
                <div className="info">{db.name}</div>
                <div className="info"> {db.phone} </div>

                <div className="info"> {db.address}</div>

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
