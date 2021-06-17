// import logo from './logo.svg';
import './App.css';


// import { useState } from "react";
import { useEffect, useState } from "react";
import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";
import SearchForm from "./SearchForm";
import RepositoryReadme from "./RepositoryReadme";
import {GraphQLClient} from "graphql-request";
import {findUserQuery} from "./query";
import List from "./list";

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
      {/* <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      /> */}
    </div>
  );
}

function App() {
  const [login, setLogin]=useState("saffower");
  //const [repo, setRepo] = useState("learning-react");
  const [userData, setUserData]=useState();

  const client=new GraphQLClient("https://api.github.com/graphql",
  {
    headers:{
      Authorization: `Bearer <Access Token>`
    }
  });

  useEffect(()=>{
    client
      .request(findUserQuery, {login})
      //.then(({user})=>setUserData(user))
      .then(({user})=>user)
      .then(setUserData)
      .catch(console.error);
  },[client, findUserQuery, login]);

  if(!userData) return <p>loading....</p>
  return (
    <>
      <SearchForm onSearch={setLogin} />
      <UserDetails data={userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
      data={userData.repositories.nodes}
      renderItem={repo => <span>{repo.name}</span>}
      />
    </>

  );
}

export default App;
