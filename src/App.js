import './App.css';
import React from 'react';
import Todo from './Todo';
import Navigation from './Navigation';

class App extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      allData : [{
        description : "Learn React",
        status : "complete"
      },
      {
        description : "Learn React Native",
        status : "in progress"
      },
      {
        description : "Learn Node",
        status : "complete"
      }],
      filteredData :  [{
        description : "Learn React",
        status : "complete"
      },
      {
        description : "Learn React Native",
        status : "in progress"
      },
      {
        description : "Learn Node",
        status : "complete"
      }]
    }
  }

  onSearchBarChange = ( event ) => {
    const searchTerm = event.target.value;
    const temporalData = this.state.allData.filter( (todo) => {
      return todo.description.includes( searchTerm );
    });

    this.setState({
      filteredData : temporalData
    });
  }

  render(){
    return (
      <div className="App">
        <Navigation onSearchBarChange={this.onSearchBarChange}/>
        {
          this.state.filteredData.map( ( todo, index ) => {
            return <Todo todo={todo} key={index} />
          })
        }
      </div>
    );
  }
  
}

export default App;
