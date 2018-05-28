var AddMovie = (props) => (
  <div className="container">
    <form className="search">
      <input type="text" id="searchField" data="addField" onChange={props.handleChange}></input>
      <input className="funcButton" type="button" value="ADD MOVIE" onClick={props.addMovie}></input>
    </form>
  </div>
);

window.AddMovie = AddMovie;