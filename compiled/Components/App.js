'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      allMovies: [],
      movieData: [],
      display: true,
      textField: '',
      addField: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'displayWatched',
    value: function displayWatched(e) {
      console.log(e.target);
      this.setState({
        display: true
      });
    }
  }, {
    key: 'displayUnwatched',
    value: function displayUnwatched(e) {
      console.log(e.target);
      this.setState({
        display: false
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.getAttribute('data'), e.target.value));
    }
  }, {
    key: 'addMovie',
    value: function addMovie(e) {
      var tempData = this.state.movieData;

      if (this.state.addField.trim().length > 0) {
        tempData.push({ title: this.state.addField });
        this.setState({
          allMovies: tempData
        });
      }
    }
  }, {
    key: 'searchMovie',
    value: function searchMovie(e) {
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
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' Movie List '
        ),
        React.createElement(AddMovie, { handleChange: this.handleChange.bind(this), addMovie: this.addMovie.bind(this) }),
        React.createElement(Search, { cb: this.searchMovie.bind(this), handleChange: this.handleChange.bind(this), state: this.state.textField }),
        React.createElement(
          'button',
          { onClick: this.displayWatched.bind(this) },
          'Watched'
        ),
        React.createElement(
          'button',
          { onClick: this.displayUnwatched.bind(this) },
          'To Watch'
        ),
        React.createElement(MovieList, { movieData: this.state.movieData, display: this.state.display })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("App"));

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYWxsTW92aWVzIiwibW92aWVEYXRhIiwiZGlzcGxheSIsInRleHRGaWVsZCIsImFkZEZpZWxkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwidGVtcERhdGEiLCJ0cmltIiwibGVuZ3RoIiwicHVzaCIsInRpdGxlIiwibmV3U3RhdGUiLCJmb3VuZCIsImkiLCJpbmNsdWRlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJhZGRNb3ZpZSIsInNlYXJjaE1vdmllIiwiZGlzcGxheVdhdGNoZWQiLCJkaXNwbGF5VW53YXRjaGVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxpQkFBVyxFQURGO0FBRVpDLGlCQUFXLEVBRkM7QUFHVEMsZUFBUyxJQUhBO0FBSVpDLGlCQUFXLEVBSkM7QUFLWkMsZ0JBQVU7QUFMRSxLQUFiO0FBRmtCO0FBU2xCOzs7O21DQUVlQyxDLEVBQUc7QUFDaEJDLGNBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBZDtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaUCxpQkFBUztBQURHLE9BQWQ7QUFHRDs7O3FDQUVnQkcsQyxFQUFHO0FBQ2xCQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQWQ7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDWlAsaUJBQVM7QUFERyxPQUFkO0FBR0Q7OztpQ0FFWUcsQyxFQUFHO0FBQ2QsV0FBS0ksUUFBTCxxQkFDR0osRUFBRUcsTUFBRixDQUFTRSxZQUFULENBQXNCLE1BQXRCLENBREgsRUFDbUNMLEVBQUVHLE1BQUYsQ0FBU0csS0FENUM7QUFHRDs7OzZCQUVPTixDLEVBQUc7QUFDVCxVQUFJTyxXQUFXLEtBQUtiLEtBQUwsQ0FBV0UsU0FBMUI7O0FBRUEsVUFBRyxLQUFLRixLQUFMLENBQVdLLFFBQVgsQ0FBb0JTLElBQXBCLEdBQTJCQyxNQUEzQixHQUFvQyxDQUF2QyxFQUEwQztBQUN4Q0YsaUJBQVNHLElBQVQsQ0FBYyxFQUFDQyxPQUFPLEtBQUtqQixLQUFMLENBQVdLLFFBQW5CLEVBQWQ7QUFDQSxhQUFLSyxRQUFMLENBQWM7QUFDWlQscUJBQVdZO0FBREMsU0FBZDtBQUdEO0FBQ0g7OztnQ0FFWVAsQyxFQUFHO0FBQ2QsVUFBSVksV0FBVyxFQUFmO0FBQ0EsVUFBSUMsUUFBUSxLQUFaOztBQUVDLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtwQixLQUFMLENBQVdDLFNBQVgsQ0FBcUJjLE1BQXpDLEVBQWlESyxHQUFqRCxFQUFzRDtBQUNyRCxZQUFJLEtBQUtwQixLQUFMLENBQVdDLFNBQVgsQ0FBcUJtQixDQUFyQixFQUF3QkgsS0FBeEIsQ0FBOEJJLFFBQTlCLENBQXVDLEtBQUtyQixLQUFMLENBQVdJLFNBQWxELENBQUosRUFBa0U7QUFDakVjLG1CQUFTRixJQUFULENBQWMsS0FBS2hCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQm1CLENBQXJCLENBQWQ7QUFDQUQsa0JBQVEsSUFBUjtBQUNBO0FBQ0Q7O0FBRUQsVUFBSUEsS0FBSixFQUFXO0FBQ1YsYUFBS1QsUUFBTCxDQUFjO0FBQ1hSLHFCQUFXZ0I7QUFEQSxTQUFkO0FBR0E7QUFDSDs7OzZCQUVRO0FBQ1AsYUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxRQUFELElBQVUsY0FBYyxLQUFLSSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUF4QixFQUFzRCxVQUFVLEtBQUtDLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFoRSxHQUZGO0FBR0UsNEJBQUMsTUFBRCxJQUFRLElBQUksS0FBS0UsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBWixFQUF5QyxjQUFjLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXZELEVBQXFGLE9BQU8sS0FBS3ZCLEtBQUwsQ0FBV0ksU0FBdkcsR0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS3NCLGNBQUwsQ0FBb0JILElBQXBCLENBQXlCLElBQXpCLENBQWpCO0FBQUE7QUFBQSxTQUpGO0FBS0U7QUFBQTtBQUFBLFlBQVEsU0FBUyxLQUFLSSxnQkFBTCxDQUFzQkosSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBakI7QUFBQTtBQUFBLFNBTEY7QUFNSSw0QkFBQyxTQUFELElBQVcsV0FBVyxLQUFLdkIsS0FBTCxDQUFXRSxTQUFqQyxFQUE0QyxTQUFTLEtBQUtGLEtBQUwsQ0FBV0csT0FBaEU7QUFOSixPQUREO0FBVUQ7Ozs7RUF4RWdCeUIsTUFBTUMsUzs7QUE0RXhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7O0FBRUFDLE9BQU9wQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFsbE1vdmllczogW10sXG5cdFx0XHRtb3ZpZURhdGE6IFtdLFxuICAgICAgZGlzcGxheTogdHJ1ZSxcblx0XHRcdHRleHRGaWVsZDogJycsXG5cdFx0XHRhZGRGaWVsZDogJydcblx0XHR9XG5cdH1cblxuICBkaXNwbGF5V2F0Y2hlZChlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5VW53YXRjaGVkKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG5cdGFkZE1vdmllKGUpIHtcbiAgICB2YXIgdGVtcERhdGEgPSB0aGlzLnN0YXRlLm1vdmllRGF0YTtcblxuICAgIGlmKHRoaXMuc3RhdGUuYWRkRmllbGQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRlbXBEYXRhLnB1c2goe3RpdGxlOiB0aGlzLnN0YXRlLmFkZEZpZWxkfSk7XHRcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbGxNb3ZpZXM6IHRlbXBEYXRhLFxuICAgICAgfSk7IFxuICAgIH0gICAgXG5cdH1cblxuXHRzZWFyY2hNb3ZpZSAoZSkge1xuICBcdHZhciBuZXdTdGF0ZSA9IFtdO1xuICBcdHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmFsbE1vdmllcy5sZW5ndGg7IGkrKykge1xuICAgIFx0aWYgKHRoaXMuc3RhdGUuYWxsTW92aWVzW2ldLnRpdGxlLmluY2x1ZGVzKHRoaXMuc3RhdGUudGV4dEZpZWxkKSkge1xuICAgIFx0XHRuZXdTdGF0ZS5wdXNoKHRoaXMuc3RhdGUuYWxsTW92aWVzW2ldKTtcbiAgICBcdFx0Zm91bmQgPSB0cnVlO1xuICAgIFx0fVxuICAgIH1cblxuICAgIGlmIChmb3VuZCkge1xuICBcdCAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllRGF0YTogbmV3U3RhdGVcbiAgICAgIH0pO1xuICAgIH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0ICByZXR1cm4gKFxuXHQgIFx0PGRpdj5cblx0ICAgIFx0PGgxPiBNb3ZpZSBMaXN0IDwvaDE+XG5cdCAgICBcdDxBZGRNb3ZpZSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGFkZE1vdmllPXt0aGlzLmFkZE1vdmllLmJpbmQodGhpcyl9Lz5cblx0ICBcdCAgPFNlYXJjaCBjYj17dGhpcy5zZWFyY2hNb3ZpZS5iaW5kKHRoaXMpfSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IHN0YXRlPXt0aGlzLnN0YXRlLnRleHRGaWVsZH0vPlxuXHQgIFx0ICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGlzcGxheVdhdGNoZWQuYmluZCh0aGlzKX0+V2F0Y2hlZDwvYnV0dG9uPlxuXHQgIFx0ICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGlzcGxheVVud2F0Y2hlZC5iaW5kKHRoaXMpfT5UbyBXYXRjaDwvYnV0dG9uPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllRGF0YT17dGhpcy5zdGF0ZS5tb3ZpZURhdGF9IGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblx0fVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcFwiKSk7XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=