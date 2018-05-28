class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      allMovies: [],
			movieData: [],
      display: true,
			textField: '',
			addField: ''
		}
	}

  displayWatched(e) {
    console.log(e.target)
    this.setState({
      display: true
    });
  }

  displayUnwatched(e) {
    console.log(e.target)
    this.setState({
      display: false
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('data')]: e.target.value
    });
  }

	addMovie(e) {
    var tempData = this.state.movieData;

    if(this.state.addField.trim().length > 0) {
      tempData.push({title: this.state.addField});	
      this.setState({
        allMovies: tempData,
      }); 
    }    
	}

	searchMovie (e) {
  	var newState = [];
  	var found = false;

    for (var i = 0; i < this.state.allMovies.length; i++) {
    	if (this.state.allMovies[i].title.includes(this.state.textField)) {
    		newState.push(this.state.allMovies[i]);
    		found = true;
    	}
    }

    if (found) {
  	  this.setState({
        movieData: newState
      });
    }
	}

	render() {
	  return (
	  	<div>
	    	<h1> Movie List </h1>
	    	<AddMovie handleChange={this.handleChange.bind(this)} addMovie={this.addMovie.bind(this)}/>
	  	  <Search cb={this.searchMovie.bind(this)} handleChange={this.handleChange.bind(this)} state={this.state.textField}/>
	  	  <button onClick={this.displayWatched.bind(this)}>Watched</button>
	  	  <button onClick={this.displayUnwatched.bind(this)}>To Watch</button>
        <MovieList movieData={this.state.movieData} display={this.state.display}/>
      </div>
    );
	}
}


ReactDOM.render(<App />, document.getElementById("App"));

window.App = App;
