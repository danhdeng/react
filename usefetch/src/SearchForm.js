import React, { useState } from "react";

// export default function SearchForm({value, onSearch=f=>f}){
//     const [searchTerm, setSearchTerm] = React.useState("");
//     const handleChange = event => {
//       setSearchTerm(event.target.value);
//     };
//     return (
//       <div className="App">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleChange}
//         />
//       </div>
//     );
//   }

export default function SearchForm({ onSearch = f => f }) {
    const [searchTerm, setSearchTerm] = useState("");

    const submit = e => {
      e.preventDefault();
      onSearch(searchTerm);
    };
  
    return (
      <form onSubmit={submit}>
        <input
          type="text"
          value={searchTerm}
          onChange={e=>setSearchTerm(e.target.value)}
          placeholder="search github"
          required
        />
        <button>Search</button>
      </form>
    );
  }
  