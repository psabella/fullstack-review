import React from 'react';

const RepoListEntry = (props) => (
  <tr>
    <td>
      <a href={props.repo.url}>{props.repo.name}</a>
    </td>
    <td>
      {props.repo.owner.login}
    </td>
    <td>
      {props.repo.stargazers_count}
    </td>
  </tr>
)

export default RepoListEntry;