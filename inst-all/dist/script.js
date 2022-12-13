class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = (index => () => {
      console.log(index);
      let { list } = this.state;
      list.splice(index, 1);
      this.setState({ list });
    });
    this.state = { list: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'] };}

  render() {
    const { list } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("ol", null,
      list.map((name, index) => {
        return /*#__PURE__*/(
          React.createElement(Item, { key: name, onDestroy: this.handleRemove(index) }, name));

      }))));



  }}


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = (() => {
      const { onDestroy } = this.props;
      const timeoutID = setTimeout(onDestroy, 4000);
      this.setState({ timeoutID });
    });
    this.handleVanishingClick = (() => {
      const { timeoutID } = this.state;
      clearTimeout(timeoutID);
      this.setState({ timeoutID: null });
    });
    this.state = { timeoutID: null };}

  render() {
    const { children, onDestroy } = this.props;
    const { timeoutID } = this.state;

    if (timeoutID) {
      return /*#__PURE__*/React.createElement("li", { class: "vanishing", onClick: this.handleVanishingClick }, children);
    } else {
      return /*#__PURE__*/(
        React.createElement("li", null,
        children, /*#__PURE__*/
        React.createElement("a", { class: "remove", onClick: this.handleRemoveClick, href: "#" }, "x")));


    }
  }}


const Demo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(List, null));

ReactDOM.render(
Demo,
document.getElementById('root'));