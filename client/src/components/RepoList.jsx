import React from 'react';

const RepoList = (props) => (
  <div>
    There are {props.repos.length} total repos saved.
    <h4> Top 25 Starred Repos </h4>
    {console.log(props.top25repos)}
    {props.top25repos.map((repo) => {
      <a href='{repo.url}'>{repo.name}</a>
    })}
  </div>
)

export default RepoList;