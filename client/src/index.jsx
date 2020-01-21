import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      top25repos: []
    }
  }

  search (term) {
    axios.post('/repos', { term })
      .then((reposSaved) => {
        console.log(`${term} was searched`);
        // this.setState({
        //   repos: this.state.repos.concat(reposSaved)
        // })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getTop25 () {
    axios.get('/repos')
      .then((results) => {
        this.setState({
          top25repos: results.data
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  componentDidMount () {
    this.getTop25();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <br/>
      <RepoList repos={this.state.repos} top25repos={this.state.top25repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

