var Search = (props) => (
  <div className="container">
    <form className="search">
      <input type="text" id="searchField" data="textField" onChange={props.handleChange}/>
      <input className="funcButton" type="button" value="SEARCH" onClick={props.cb}></input>
    </form>
  </div>
)

window.Search = Search;