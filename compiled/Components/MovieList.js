"use strict";

var MovieList = function MovieList(props) {
	return React.createElement(
		"div",
		{ className: "movie-list" },
		props.movieData.map(function (movie) {
			return React.createElement(Movie, { movie: movie, display: props.display });
		})
	);
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTW92aWVMaXN0LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3QiLCJwcm9wcyIsIm1vdmllRGF0YSIsIm1hcCIsIm1vdmllIiwiZGlzcGxheSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFFBQ2Y7QUFBQTtBQUFBLElBQUssV0FBVyxZQUFoQjtBQUNHQSxRQUFNQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxLQUFEO0FBQUEsVUFBVyxvQkFBQyxLQUFELElBQU8sT0FBT0EsS0FBZCxFQUFxQixTQUFTSCxNQUFNSSxPQUFwQyxHQUFYO0FBQUEsR0FBcEI7QUFESCxFQURlO0FBQUEsQ0FBaEI7O0FBTUFDLE9BQU9OLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IChcblx0PGRpdiBjbGFzc05hbWUgPVwibW92aWUtbGlzdFwiPlxuXHQgIHtwcm9wcy5tb3ZpZURhdGEubWFwKChtb3ZpZSkgPT4gPE1vdmllIG1vdmllPXttb3ZpZX0gZGlzcGxheT17cHJvcHMuZGlzcGxheX0vPil9XG5cdDwvZGl2PlxuKTtcblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDtcbiJdfQ==