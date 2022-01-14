import React , {Component} from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBox';
import "./App.css"
import 'tachyons';
import Scroll from '../Component/Scroll';



class App extends Component {
 constructor(){
    super()    
    this.state = {
        robots: [],
        searchfield : "",
        isLoading : false
    }
 }
  
          componentDidMount(){
            this.setState({isLoading : true})
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
              this.setState({
                isLoading: false,
                robots : data
              })
            })
          }

  onSearchChange=(event)=>{
    this.setState ({ searchfield : event.target.value}) 
     
  }

    render() {
         const filteredRobots = this.state.robots.filter ( robot =>{
           
             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            
          } )  

          return this.state.isLoading === true ? 
            
            <h1 className='tc'>Loading</h1> :
          
              ( <div className='tc'>
              <h1 className= "size">RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
              < CardList  robots = {filteredRobots} />
              </Scroll>
              </div>
              )
           
       
    }
    
}

 
export default App;
