class Movie extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		watched: true,
  		text: 'Watched',
  	}
  }
  
  markWatched(e) {
  	var text = this.state.watched ? 'Unwatched' : 'Watched';

  	this.setState({
  		watched: !this.state.watched,
  		text: text
  	})
  }

	render() {
		return (
			<div>
			  {((this.state.watched && this.props.display) || (!this.state.watched && !this.props.display)) && 
			  	<RenderMovie movie={this.props.movie} text={this.state.text} markWatched={this.markWatched.bind(this)}/>}
			</div>
		);
	}
	
}

var RenderMovie = (props) => (
  <div>
	  <div className="movie"> {props.movie.title} </div>
	  <button id={props.text} onClick={props.markWatched}>{props.text}</button>
	</div>
);

window.Movie = Movie;