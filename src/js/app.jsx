import React from "react";
import SearchBar from "./components/SearchBar";
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';

var padding = { paddingBottom: "40px" };


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1> Origin Weather Application</h1>
          <p> Always know if you'll need an Umbrella!</p>
        </div>
        <div className="row">
          <div style={padding} className="col-12">
            <SearchBar />
          </div>
          <div className='col-12 col-md-6'>
            <CityInformation />
          </div>
          <div className='col-12 col-md-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
