import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term:  ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }
  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form className = "input-group" onSubmit = {this.handleSubmit.bind(this)}>
          <input
            placeholder = "Enter the City"
            className = "form-control"
            value = {this.state.term}
            onChange = {this.handleChange.bind(this)}/>

          <span className = "input-group-btn">
            <button type = "submit" className = "btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null,mapDispatchToProps)(SearchBar);
