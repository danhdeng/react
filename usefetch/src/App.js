// import logo from './logo.svg';
// import './App.css';


// import { useState } from "react";
import { useState } from "react";
import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";
import SearchForm from "./SearchForm";

function GitHubUsers({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}

function UserDetails({ data }) {
  console.log(`data inside userDetails ${data}`);
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      />
    </div>
  );
}

function App() {
  const [login, setLogin]=useState("moonhighway");
  return (
    <>
      <SearchForm onSearch={setLogin} />
      <GitHubUsers login={login} />
    </>

  );
}

export default App;

// import React from "react";
// import Fetch from "./Fetch";

// function GitHubUser({ login }) {
//   return (
//     <Fetch
//       uri={`https://api.github.com/users/${login}`}
//       renderSuccess={UserDetails}
//     />
//   );
// }

// function UserDetails({ data }) {
//   return (
//     <div className="githubUser">
//       <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
//       <div>
//         <h1>{data.login}</h1>
//         {data.name && <p>{data.name}</p>}
//         {data.location && <p>{data.location}</p>}
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return <GitHubUser login="moonhighway" />;
// }
