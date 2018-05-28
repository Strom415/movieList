"use strict";

var AddMovie = function AddMovie(props) {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "form",
      { className: "search" },
      React.createElement("input", { type: "text", id: "searchField", data: "addField", onChange: props.handleChange }),
      React.createElement("input", { className: "funcButton", type: "button", value: "ADD MOVIE", onClick: props.addMovie })
    )
  );
};

window.AddMovie = AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQWRkTW92aWUuanN4Il0sIm5hbWVzIjpbIkFkZE1vdmllIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJhZGRNb3ZpZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxRQUFoQjtBQUNFLHFDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLGFBQXRCLEVBQW9DLE1BQUssVUFBekMsRUFBb0QsVUFBVUEsTUFBTUMsWUFBcEUsR0FERjtBQUVFLHFDQUFPLFdBQVUsWUFBakIsRUFBOEIsTUFBSyxRQUFuQyxFQUE0QyxPQUFNLFdBQWxELEVBQThELFNBQVNELE1BQU1FLFFBQTdFO0FBRkY7QUFERixHQURhO0FBQUEsQ0FBZjs7QUFTQUMsT0FBT0osUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiQWRkTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkTW92aWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoRmllbGRcIiBkYXRhPVwiYWRkRmllbGRcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZ1bmNCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJBREQgTU9WSUVcIiBvbkNsaWNrPXtwcm9wcy5hZGRNb3ZpZX0+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKTtcblxud2luZG93LkFkZE1vdmllID0gQWRkTW92aWU7Il19