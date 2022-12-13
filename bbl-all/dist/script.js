function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var List = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(List, _React$Component);
  function List(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.handleRemove = function (index) {
      return function () {
        console.log(index);
        var list = _this.state.list;
        list.splice(index, 1);
        _this.setState({
          list: list
        });
      };
    };
    _this.state = {
      list: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
    };
    return _this;
  }
  var _proto = List.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var list = this.state.list;
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("ol", null, list.map(function (name, index) {
        return /*#__PURE__*/(
          React.createElement(Item, {
            key: name,
            onDestroy: _this2.handleRemove(index)
          }, name)
        );
      })))
    );
  };
  return List;
}(React.Component);
var Item = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(Item, _React$Component2);
  function Item(props) {
    var _this3;
    _this3 = _React$Component2.call(this, props) || this;
    _this3.handleRemoveClick = function () {
      var onDestroy = _this3.props.onDestroy;
      var timeoutID = setTimeout(onDestroy, 4000);
      _this3.setState({
        timeoutID: timeoutID
      });
    };
    _this3.handleVanishingClick = function () {
      var timeoutID = _this3.state.timeoutID;
      clearTimeout(timeoutID);
      _this3.setState({
        timeoutID: null
      });
    };
    _this3.state = {
      timeoutID: null
    };
    return _this3;
  }
  var _proto2 = Item.prototype;
  _proto2.render = function render() {
    var _this$props = this.props,
      children = _this$props.children,
      onDestroy = _this$props.onDestroy;
    var timeoutID = this.state.timeoutID;
    if (timeoutID) {
      return /*#__PURE__*/React.createElement("li", {
        "class": "vanishing",
        onClick: this.handleVanishingClick
      }, children);
    } else {
      return /*#__PURE__*/(
        React.createElement("li", null, children, /*#__PURE__*/
        React.createElement("a", {
          "class": "remove",
          onClick: this.handleRemoveClick,
          href: "#"
        }, "x"))
      );
    }
  };
  return Item;
}(React.Component);
var Demo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(List, null));
ReactDOM.render(Demo, document.getElementById('root'));