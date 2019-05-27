import React from "react";

const activeClassName = "w100p fz16 bg-success cw fwb";
const notActiveClassName = "w100p fz16 fwb b-s1-grey";

class Columns extends React.Component {
  state = {
    ticket: false,
    car: true
  };

  handleRadio = transport => {
    if (transport === "car") {
      this.setState({
        car: true,
        ticket: false
      });
    } else {
      this.setState({
        car: false,
        ticket: true
      });
    }
  };

  render() {
    const { details } = this.props;
    return (
      <>
        {details.map((item, key) => {
          return <td key={`tb-column-${item}-${key}`}>{item}</td>;
        })}
        <td key="radio">
          <div>
            <div>
              <input
                type="radio"
                value="option2"
                checked={this.state.car}
                onChange={() => this.handleRadio("car")}
                disabled={this.props.approved}
              />
              <label className="pl5">Automobiliu</label>
            </div>
            <div>
              <input
                type="radio"
                value="option2"
                checked={this.state.ticket}
                onChange={() => this.handleRadio("ticket")}
                disabled={this.props.approved}
              />
              <label className="pl5">Lėktuvu</label>
            </div>
          </div>
        </td>
        <td key="veiksmai">
          <button
            className={
              this.props.approved ? notActiveClassName : activeClassName
            }
            onClick={() =>
              this.props.handleClick({
                departureDate: this.props.departureDate,
                returnDate: this.props.returnDate,
                tripDetailsId: this.props.id,
                carNeeded: this.state.car,
                ticketNeeded: this.state.ticket
              })
            }
            disabled={this.props.approved}
          >
            Patvirtinti
          </button>
        </td>
      </>
    );
  }
}

export default Columns;
