var MovieList = (props) => (
	<div className ="movie-list">
	  {props.movieData.map((movie) => <Movie movie={movie} display={props.display}/>)}
	</div>
);

window.MovieList = MovieList;
