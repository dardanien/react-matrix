!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.Matrix=r(require("react")):e.Matrix=r(e.React)}(this,function(e){return function(e){function r(t){if(s[t])return s[t].exports;var p=s[t]={exports:{},id:t,loaded:!1};return e[t].call(p.exports,p,p.exports,r),p.loaded=!0,p.exports}var s={};return r.m=e,r.c=s,r.p="",r(0)}([function(e,r,s){"use strict";s(4);var t=s(1),p=s(8),i=s(6),o=t.createClass({displayName:"Matrix",propTypes:{squareSize:t.PropTypes.oneOfType([t.PropTypes.number,t.PropTypes.array]).isRequired,matrix:t.PropTypes.array.isRequired,onCellClick:t.PropTypes.func,cellStates:t.PropTypes.oneOfType([t.PropTypes.object,t.PropTypes.array]),move:t.PropTypes.bool},render:function(){Array.isArray(this.props.squareSize)||(this.props.squareSize=[this.props.squareSize,this.props.squareSize]);var e=this.props.squareSize[0]*this.props.matrix[0].length,r=this.props.squareSize[1]*this.props.matrix.length;return p({width:e,height:r-this.props.squareSize[1]},i({className:"Grid",move:this.props.move,onCellClick:this.props.onCellClick,matrix:this.props.matrix,squareSize:this.props.squareSize,cellStates:this.props.cellStates}))}});e.exports=o},function(r){r.exports=e},function(e){"use strict";e.exports=function(e){return"object"!=typeof e?Array.prototype.join.call(arguments," "):Object.keys(e).filter(function(r){return e[r]}).join(" ")}},function(e){e.exports={linear:function(e,r){return function(s){return r[0]+(r[1]-r[0])*((s-e[0])/(e[1]-e[0]))}}}},function(){},function(e,r,s){"use strict";var t=s(1),p=s(2),i=t.createClass({displayName:"Cell",propTypes:{x:t.PropTypes.number.isRequired,y:t.PropTypes.number.isRequired,size:t.PropTypes.array.isRequired,cellState:t.PropTypes.string,onClick:t.PropTypes.func},handleClick:function(){this.props.onClick&&this.props.onClick({x:this.props.x/this.props.size[0],y:this.props.y/this.props.size[1],cellState:this.props.cellState})},render:function(){var e={Cell:!0};return this.props.cellState&&(e[this.props.cellState]=!0),t.DOM.rect({className:p(e),x:this.props.x,y:this.props.y,width:this.props.size[0],height:this.props.size[1],onClick:this.handleClick})}});e.exports=i},function(e,r,s){"use strict";var t=s(1),p=s(7),i=s(2),o=t.createClass({displayName:"Grid",propTypes:{matrix:t.PropTypes.array.isRequired,squareSize:t.PropTypes.array.isRequired,onCellClick:t.PropTypes.func,cellStates:t.PropTypes.oneOfType([t.PropTypes.object,t.PropTypes.array]),move:t.PropTypes.bool},render:function(){var e=i({Grid:!0,move:this.props.move}),r=this.props.matrix.map(function(e,r){return p({onCellClick:this.props.onCellClick,key:r,dataRow:e,cellStates:this.props.cellStates,squareSize:this.props.squareSize})}.bind(this));return t.DOM.g({className:e,style:{transform:"translateY(-"+this.props.squareSize[1]+"px)"}},r)}});e.exports=o},function(e,r,s){"use strict";var t=s(1),p=s(3),i=s(5),o=t.createClass({displayName:"Row",propTypes:{dataRow:t.PropTypes.array.isRequired,squareSize:t.PropTypes.array.isRequired,key:t.PropTypes.number.isRequired,onCellClick:t.PropTypes.func,cellStates:t.PropTypes.oneOfType([t.PropTypes.object,t.PropTypes.array])},render:function(){var e=p.linear([0,this.props.dataRow.length],[0,this.props.squareSize[0]*this.props.dataRow.length]),r=p.linear([0,this.props.dataRow.length],[0,this.props.squareSize[1]*this.props.dataRow.length]),s=this.props.dataRow.map(function(s,t){return i({x:e(t),y:r(this.props.key),cellState:this.props.cellStates&&this.props.cellStates[s],size:this.props.squareSize,onClick:this.props.onCellClick,key:this.props.key+1+t})}.bind(this));return t.DOM.g({className:"Row"},s)}});e.exports=o},function(e,r,s){"use strict";var t=s(1),p=(s(3),t.createClass({displayName:"Svg",propTypes:{width:t.PropTypes.number.isRequired,height:t.PropTypes.number.isRequired},render:function(){return t.DOM.svg({width:this.props.width,height:this.props.height,className:"Matrix"},this.props.children)}}));e.exports=p}])});