/**
 * @jsx React.DOM
 */

'use strict';

if (process.env.NODE_ENV !== 'test')
  require('./Matrix.scss');

var React = require('react');
var Svg = require('./Svg.jsx');
var Grid = require('./Grid.jsx');

var Matrix = React.createClass({
  propTypes: {
    squareSize: React.PropTypes.number.isRequired,
    matrix: React.PropTypes.array.isRequired,

    onCellClick: React.PropTypes.func,
    cellStates: React.PropTypes.object
  },

  render () {
    var width = this.props.squareSize * this.props.matrix[0].length;
    var height = this.props.squareSize * this.props.matrix.length;

    return (
      <Svg width={width}
           height={height}>
        <Grid className="Grid"
              onCellClick={this.props.onCellClick}
              matrix={this.props.matrix}
              squareSize={this.props.squareSize}
              cellStates={this.props.cellStates} />
      </Svg>
    );
  }
});

module.exports = Matrix;
