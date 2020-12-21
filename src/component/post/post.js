import React from "react";
import API from "../api/api";
import uniqid from "uniqid";
import Create from "../create/create";

class Post extends React.Component {
  state = {
    
    data: [],
    value: "",
    valuet: "",
    valuea: "",
    updatedValue: "",
    isDisabled: false,
    isLoading: false,
    error: "",
  };

    async componentDidMount() {
      this.setState({ isLoading: true });
      const response = await API.get("/users");
      console.log(response.data);

      const data = response.data;
      this.setState({ data: data, isLoading: false });
    }

  create = async (e) => {
    e.preventDefault();

    if (this.state.value.length < 2) {
      return alert("please enter correct name")

    }
    if(this.state.valuet.length < 9 ){
      return alert("please enter the correst phone Number")
    }
      try {
        this.setState({ isDisabled: true, isLoading: true });
        const newItem = {
          id: uniqid(),
          name: this.state.value,
          phone: this.state.valuet,
          address: this.state.valuea,
        };
        const { data } = await API.post("/users", newItem);
        alert(`Thank you ${this.state.value} see you soon`)

        return this.setState({
          data: [...this.state.data, data],
          value: "",
          valuet: "",
          valuea: "",

          isDisabled: false,
          isLoading: false,
        });

        
      } catch (err) {}
    
  };
  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleOnChanget = (e) => {
    this.setState({ valuet: e.target.value });

  };

  handleOnChangea = (e) => {
    this.setState({ valuea: e.target.value });

  };

  render() {

    const spinner = () => {
      return <div>loading ...</div>;
    };

    return (
      <div>
        <Create
          value={this.state.value}
          onChange={this.handleOnChange}
          create={this.create}
          onChanget={this.handleOnChanget}
          valuet={this.state.valuet}
          valuea={this.state.valuea}
          onChangea={this.handleOnChangea}
          create={this.create}
        />
      </div>
    );
  }
}
export default Post;
