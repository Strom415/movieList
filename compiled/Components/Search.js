"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "form",
      { className: "search" },
      React.createElement("input", { type: "text", id: "searchField", data: "textField", onChange: props.handleChange }),
      React.createElement("input", { className: "funcButton", type: "button", value: "SEARCH", onClick: props.cb })
    )
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvU2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImNiIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsUUFBTSxXQUFVLFFBQWhCO0FBQ0UscUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsYUFBdEIsRUFBb0MsTUFBSyxXQUF6QyxFQUFxRCxVQUFVQSxNQUFNQyxZQUFyRSxHQURGO0FBRUUscUNBQU8sV0FBVSxZQUFqQixFQUE4QixNQUFLLFFBQW5DLEVBQTRDLE9BQU0sUUFBbEQsRUFBMkQsU0FBU0QsTUFBTUUsRUFBMUU7QUFGRjtBQURGLEdBRFc7QUFBQSxDQUFiOztBQVNBQyxPQUFPSixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaEZpZWxkXCIgZGF0YT1cInRleHRGaWVsZFwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmdW5jQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU0VBUkNIXCIgb25DbGljaz17cHJvcHMuY2J9PjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbilcblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=