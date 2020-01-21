import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    There are {props.repos.length} total repos saved.
    <h4> Top 25 Starred Repos </h4>
    <table>
      <tbody>
        <tr>
          <th> Repo Name</th>
          <th>User</th>
          <th>Star Count</th>
        </tr>
        {props.top25repos.map((repo, index) => {
          return <RepoListEntry key={index} repo={repo}/>
        })}
      </tbody>
    </table>
  </div>
)

export default RepoList;