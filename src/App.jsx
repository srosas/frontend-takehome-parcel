import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Gems from './components/Gems';
import Search from './components/Search';

const RUBY_GEM_URL = "http://localhost:3000/api/v1/search.json?query=";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gems: [],
      searchQuery: '',
      savedGems: []
    };
    this.resetSearch = this.resetSearch.bind(this);
    this.addToSaved = this.addToSaved.bind(this);
    this.removeFromSaved = this.removeFromSaved.bind(this);
    this.accessSaved = this.accessSaved.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchGem = this.searchGem.bind(this);
  }

  resetSearch() {
    this.setState({
      gems: [],
      searchQuery: ''
    })
  }

  addToSaved(gem) {
    window.localStorage.setItem(gem.name, JSON.stringify({
      name: gem.name,
      version: gem.version,
      info: gem.info
    }))
  }

  removeFromSaved(gem) {
    window.localStorage.removeItem(gem.name)
  }

  accessSaved(savedG) {
    savedG.length = 0;
    Object.keys(window.localStorage).forEach((key) => {
      savedG.push(JSON.parse(window.localStorage.getItem(key)))
    });
    return savedG;
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }

  handleSubmit(e) {
    this.searchGem(this.state.searchQuery);
  }

  searchGem(event) {
    event.preventDefault();
    const url = `${RUBY_GEM_URL}${this.state.searchQuery}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gems: data,
        })
      });
  }

  render() {
    const { gems, searchQuery } = this.state;
    const savedG = [];
    return (
      <div className="app">
        <Header text="Ruby Gem Search" />
        <Switch>
          <Route exact path='/' render={() =>
            <div>
              <div className="app-save">
                <Link onClick={() => this.accessSaved(savedG)} to='/saved'>View Saved Gems</Link>
              </div>
              <Search searchQuery={searchQuery} handleChange={this.handleChange} searchGem={this.searchGem} placeholder="Search for your favorite Gems" />
              {gems.length > 0 ? (<Gems gems={gems} addToSaved={this.addToSaved} removeFromSaved={this.removeFromSaved} />) : (<p></p>)}
            </div>
          } />
          <Route exact path='/saved' render={() =>
            <div>
              <div className="app-back">
                <Link onClick={() => this.resetSearch()} to='/'>Back to Search</Link>
              </div>
              {savedG.length > 0 ? (<Gems gems={savedG} addToSaved={this.addToSaved} removeFromSaved={this.removeFromSaved} />) : (<p>No Saved Gems</p>)}
            </div>
          } />
        </Switch>
      </div>
    )
  }
}
export default App;
