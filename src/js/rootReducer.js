import { combineReducers } from 'redux';
import SearchBarReducer from './components/SearchBar/searchReducer';
import CityInformationReducer from './components/CityInformation/cityReducer';
import SearchHistoryReducer from './components/SearchHistory/historyReducer';

const rootReducer = combineReducers({
    searchBar: SearchBarReducer,
    searchHistory: SearchHistoryReducer,
    cityInformation: CityInformationReducer
});

export default rootReducer;