

import React from "react";
import ReactDOM from "react-dom";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

function Search() {
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div class="col-md-6 mb-4">
        <form class="form-inline md-form mr-auto">
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
  <button class="btn btn-unique btn-rounded btn-sm my-0 waves-effect waves-light" type="submit">Search</button>
</form>
  
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      
    </div>
    
  );
}
export default Search;