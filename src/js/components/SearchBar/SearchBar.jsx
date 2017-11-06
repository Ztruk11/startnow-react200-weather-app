import React from "react";
import { getWeather, updateCity } from "./searchActions";
import { updateWeatherInfo } from "../CityInformation/cityActions";
import { addNewSearchItem } from "../SearchHistory/historyActions";

var padding = { paddingBottom: "15px" };

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePremadeClick = this.handlePremadeClick.bind(this);
  }

  handleClick(event) {
    const { dispatch, selectedCity } = this.props;
    dispatch(getWeather(selectedCity));
    dispatch(addNewSearchItem(selectedCity));
  }

  handlePremadeClick(event) {
    const { dispatch } = this.props;
    dispatch(getWeather(event.target.value));
    dispatch(addNewSearchItem(event.target.value));
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }

  render() {
    const selectedCity = this.props.selectedCity;
    return (
      <div>
        <button
          onClick={this.handlePremadeClick}
          value="San Diego"
          className="btn btn-primary"
        >
          San Diego
        </button>
        <button
          onClick={this.handlePremadeClick}
          value="Tokyo"
          className="btn btn-primary"
        >
          Tokyo
        </button>
        <button
          onClick={this.handlePremadeClick}
          value="Los Angeles"
          className="btn btn-primary"
        >
          Los Angeles
        </button>
        <button
          onClick={this.handlePremadeClick}
          value="Seattle"
          className="btn btn-primary"
        >
          Seattle
        </button>
        <button
          onClick={this.handlePremadeClick}
          value="New York"
          className="btn btn-primary"
        >
          New York
        </button>
        <div style={padding} className="input-group">
          <input
            id="city"
            onChange={this.handleInputChange}
            value={selectedCity}
            className="form-control"
            type="text"
            placeholder="Enter a City"
          />
          <span className="input-group-btn">
            <button onClick={this.handleClick} className="btn btn-primary">
              Go!
            </button>
          </span>
        </div>
      </div>
    );
  }
}
