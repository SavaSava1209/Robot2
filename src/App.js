import './App.css';
import CardList from './Components/CardList';
import React, {  useEffect} from 'react';
import 'tachyons';
import SearchField from './Components/SearchField';
import Scroll from './Components/Scroll';
import ErrorBoundry from './Components/ErrorBoundry';
import { connect } from 'react-redux';
import Header from './Components/Header';

import { setSearchField, requestRobots } from './actions';

const mapStatetoProps = state => {
    return {
      searchField: state.searchRobots.searchField,
      isPending: state.requestRobots.isPending,
      robots: state.requestRobots.robots,
      error: state.requestRobots.error

    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
      onRequestRobots: () => dispatch(requestRobots())
    }
  }


function App(props) {  
  

  useEffect(() => props.onRequestRobots(), [])

  

  const filterRobots = props.robots.filter(robot => {
     return robot.name.toLowerCase().includes(props.searchField.toLowerCase())
    })
  
  return (
    props.isPending
    ? <h1 className='ma3'>Loading</h1>
    : (<div className="App">
         <Header />
         <SearchField onSearchChange={props.onSearchChange}/>
         <Scroll>
           <ErrorBoundry>
             <CardList robots={filterRobots}/>   
           </ErrorBoundry>
         </Scroll>                    
        </div>
        )
   
  )


    //  if (robots.length === 0) {
    //   return (<h1 className='ma3'>Loading</h1>)
    // } 
    //   return (
    //     <div className="App">
    //       <h1>RobotFriends</h1>
    //       <SearchField onSearchChange={onSearchChange}/>
    //       <Scroll>
    //         <ErrorBoundry>
    //           <CardList robots={filterRobot}/>   
    //         </ErrorBoundry>
    //       </Scroll>           
    //     </div>
    //   );
    
  
    
   
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       robots: [],
//       searchField: ' '
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => this.setState({robots: users}))
//       .catch(err => console.log('Unable to get users data'))
//   }

//   onSearchChange = (event) => {
//     this.setState({searchField: event.target.value})
//   }


//   render() {
//     const filterRobot = this.state.robots.filter(robot => {
//      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
//     })
//     if (this.state.robots.length === 0) {
//       return (<h1 className='ma3'>Loading</h1>)
//     } else {
//       return (
//         <div className="App">
//           <h1>RobotFriends</h1>
//           <SearchField onSearchChange={this.onSearchChange}/>
//           <Scroll>
//             <ErrorBoundry>
//               <CardList robots={filterRobot}/>   
//             </ErrorBoundry>
//           </Scroll>           
//         </div>
//       );
//     }
    
//   }
// }

export default connect(mapStatetoProps, mapDispatchToProps)(App);
