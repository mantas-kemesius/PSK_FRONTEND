import React from "react";
import Columns from "./../columns/Container";

const active = { style: { backgroundColor: "#f1f1f1" }, className: "" };
const notActive = { style: {}, className: "" };

class Rows extends React.Component {
  state = {
    hoverArr: [],
    set: false
  };

  componentDidUpdate() {
    if (!this.state.set && this.props.ids.length > 0) {
      const hoverArr = [];
      this.props.ids.forEach((i, key) => hoverArr.push(false));
      this.setState({
        hoverArr,
        set: true
      });
    }
  }

  toggleHover = (hovered, key) => {
    const { hoverArr } = this.state;
    hoverArr[key] = hovered;
    this.setState({
      hoverArr
    });
  };

  render() {
    if (!this.props.ready) {
      return null;
    }
    const { hoverArr } = this.state;
    return (
      <>
        {this.props.ids.map((item, key) => (
          <tr
            className={hoverArr[key] ? active.className : notActive.className}
            key={`tb-row-${item}`}
            style={hoverArr[key] ? active.style : notActive.style}
            onMouseOver={() => this.toggleHover(true, key)}
            onMouseOut={() => this.toggleHover(false, key)}
          >
            <Columns id={item} />
          </tr>
        ))}
      </>
    );
  }
}

export default Rows;
