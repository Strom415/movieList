'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_React$Component) {
  _inherits(Movie, _React$Component);

  function Movie(props) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

    _this.state = {
      watched: true,
      text: 'Watched'
    };
    return _this;
  }

  _createClass(Movie, [{
    key: 'markWatched',
    value: function markWatched(e) {
      var text = this.state.watched ? 'Unwatched' : 'Watched';

      this.setState({
        watched: !this.state.watched,
        text: text
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        (this.state.watched && this.props.display || !this.state.watched && !this.props.display) && React.createElement(RenderMovie, { movie: this.props.movie, text: this.state.text, markWatched: this.markWatched.bind(this) })
      );
    }
  }]);

  return Movie;
}(React.Component);

var RenderMovie = function RenderMovie(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'movie' },
      ' ',
      props.movie.title,
      ' '
    ),
    React.createElement(
      'button',
      { id: props.text, onClick: props.markWatched },
      props.text
    )
  );
};

window.Movie = Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTW92aWUuanN4Il0sIm5hbWVzIjpbIk1vdmllIiwicHJvcHMiLCJzdGF0ZSIsIndhdGNoZWQiLCJ0ZXh0IiwiZSIsInNldFN0YXRlIiwiZGlzcGxheSIsIm1vdmllIiwibWFya1dhdGNoZWQiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZW5kZXJNb3ZpZSIsInRpdGxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxlQUFTLElBREc7QUFFWkMsWUFBTTtBQUZNLEtBQWI7QUFGa0I7QUFNbEI7Ozs7Z0NBRVdDLEMsRUFBRztBQUNkLFVBQUlELE9BQU8sS0FBS0YsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLFdBQXJCLEdBQW1DLFNBQTlDOztBQUVBLFdBQUtHLFFBQUwsQ0FBYztBQUNiSCxpQkFBUyxDQUFDLEtBQUtELEtBQUwsQ0FBV0MsT0FEUjtBQUViQyxjQUFNQTtBQUZPLE9BQWQ7QUFJQTs7OzZCQUVPO0FBQ1IsYUFDQztBQUFBO0FBQUE7QUFDRyxTQUFFLEtBQUtGLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixLQUFLRixLQUFMLENBQVdNLE9BQWxDLElBQStDLENBQUMsS0FBS0wsS0FBTCxDQUFXQyxPQUFaLElBQXVCLENBQUMsS0FBS0YsS0FBTCxDQUFXTSxPQUFuRixLQUNBLG9CQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUtOLEtBQUwsQ0FBV08sS0FBL0IsRUFBc0MsTUFBTSxLQUFLTixLQUFMLENBQVdFLElBQXZELEVBQTZELGFBQWEsS0FBS0ssV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUU7QUFGSCxPQUREO0FBTUE7Ozs7RUF6QmtCQyxNQUFNQyxTOztBQTZCMUIsSUFBSUMsY0FBYyxTQUFkQSxXQUFjLENBQUNaLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLE9BQWY7QUFBQTtBQUF5QkEsWUFBTU8sS0FBTixDQUFZTSxLQUFyQztBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUE7QUFBQSxRQUFRLElBQUliLE1BQU1HLElBQWxCLEVBQXdCLFNBQVNILE1BQU1RLFdBQXZDO0FBQXFEUixZQUFNRztBQUEzRDtBQUZELEdBRGdCO0FBQUEsQ0FBbEI7O0FBT0FXLE9BQU9mLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgXHRcdHdhdGNoZWQ6IHRydWUsXG4gIFx0XHR0ZXh0OiAnV2F0Y2hlZCcsXG4gIFx0fVxuICB9XG4gIFxuICBtYXJrV2F0Y2hlZChlKSB7XG4gIFx0dmFyIHRleHQgPSB0aGlzLnN0YXRlLndhdGNoZWQgPyAnVW53YXRjaGVkJyA6ICdXYXRjaGVkJztcblxuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdFx0d2F0Y2hlZDogIXRoaXMuc3RhdGUud2F0Y2hlZCxcbiAgXHRcdHRleHQ6IHRleHRcbiAgXHR9KVxuICB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0ICB7KCh0aGlzLnN0YXRlLndhdGNoZWQgJiYgdGhpcy5wcm9wcy5kaXNwbGF5KSB8fCAoIXRoaXMuc3RhdGUud2F0Y2hlZCAmJiAhdGhpcy5wcm9wcy5kaXNwbGF5KSkgJiYgXG5cdFx0XHQgIFx0PFJlbmRlck1vdmllIG1vdmllPXt0aGlzLnByb3BzLm1vdmllfSB0ZXh0PXt0aGlzLnN0YXRlLnRleHR9IG1hcmtXYXRjaGVkPXt0aGlzLm1hcmtXYXRjaGVkLmJpbmQodGhpcyl9Lz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdFxufVxuXG52YXIgUmVuZGVyTW92aWUgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cblx0ICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllXCI+IHtwcm9wcy5tb3ZpZS50aXRsZX0gPC9kaXY+XG5cdCAgPGJ1dHRvbiBpZD17cHJvcHMudGV4dH0gb25DbGljaz17cHJvcHMubWFya1dhdGNoZWR9Pntwcm9wcy50ZXh0fTwvYnV0dG9uPlxuXHQ8L2Rpdj5cbik7XG5cbndpbmRvdy5Nb3ZpZSA9IE1vdmllOyJdfQ==