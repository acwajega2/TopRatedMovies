import React, { Component } from 'react';
import axios from 'axios'


//---Creating the context
const MovieContext = React.createContext();
//---Provider--Top of Application
//---Context --pass props

//


class MovieProvider extends Component {

//----Creating the state
constructor(props){
    super(props)
    this.state ={
        movies : [{title:"Spiderman",remarks:"nice movie to watch with family"},{}],
        msg : "hello"
    }
}
//-----End of the state
//---componet did mount
 componentDidMount(){
//---Fetch all movies
this.getMovies()


}


//----Get Movies funstions
getMovies =  () =>{
    console.log('--Reached hia')
  axios.get('http://127.0.0.1:8000/api/')
  .then(res => {
      console.log('..Sweeeeeet'+res.data)
      this.setState(() =>{
          return{
              movies : res.data
          }}
      )

  })


    

    
        


}
//------End of Get Movies

//-----Get Movie Method
getMovie =() =>{

}

//-----End of Get Movie Method

//------Delete Movie---

deletMovie =() =>{

}
//----End of Delete Movie


    render() {
        return (
           <MovieContext.Provider value={{...this.state,
            getMovies : this.getMovies,
           getMovie : this.getMovie,
           deletMovie : this.deletMovie}}>
               {this.props.children}
           </MovieContext.Provider> 
        );
    }
}


//---Creating the consumer
const MovieConsumer = MovieContext.Consumer;

export {MovieConsumer,MovieProvider}
