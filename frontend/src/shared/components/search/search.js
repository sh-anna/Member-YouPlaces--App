import React from 'react';

import './search.css';

export const Search = ({ placeholder,handleChange, handleClick }) => (
    <div className="search">
        <input 
            type="text" 
            className="search-form" 
            name="search" 
            placeholder={placeholder} 
            onChange={handleChange}/>
        <button type="button"   
            className="search-button" 
            onClick={handleClick}>
                Search
        </button>
    </div>
);
export default Search;



// import React, {Component} from 'react'
// import SearchInput, {createFilter} from 'react-search-input'

// import PlaceList from '../../../places/components/placeList/placeList';
// import './search.css';

// const KEYS_TO_FILTERS = ['place.id', 'place.title', 'place.description', 'place.address', String]

// class Search extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       searchTerm: ''
//     }
//     this.searchUpdated = this.searchUpdated.bind(this)
//   }

//   render () {
//     const filteredPlaces = PlaceList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

//     return (
//       <div>
//         <SearchInput className="search-input" onChange={this.searchUpdated} />
//         {filteredPlaceList.map(PlaceList => {
//           return (
//             <div className="place" key={place.id}>
//                 <div className="title">{place.title}</div>
//                 <div className="description">{place.description}</div>
//                 <div className="address">{place.address}</div>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }

//   searchUpdated (term) {
//     this.setState({searchTerm: term})
//   }
// }

// export default Search;

