import React from "react";

const activeClassName = "w100p fz16 bg-success cw fwb";
const dangerClassName = "w100p fz16 bg-danger cw fwb";
const notActiveClassName = "w100p fz16 fwb b-s1-grey";

class Columns extends React.Component {
  state = {
    ticket: false,
    car: false
  };

  componentDidUpdate = () => {
    if (this.props.details[3] || this.props.details[4]) {
      if (!this.state.ticket && !this.state.car && !!this.props.details) {
        this.setState({
          ticket: this.props.details[4],
          car: this.props.details[3]
        });
      }
    }
  };

  handleRadio = transport => {
    if (transport === "car") {
      this.setState({
        car: !this.state.car
      });
    } else {
      this.setState({
        ticket: !this.state.ticket
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
          {this.props.possibleToClick && this.props.isUserAvailable ? (
            <div>
              <div>
                <input
                  type="checkbox"
                  value="option2"
                  checked={this.state.car}
                  onChange={() => this.handleRadio("car")}
                  disabled={this.props.approved}
                />
                <label className="pl5">Automobiliu</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="option2"
                  checked={this.state.ticket}
                  onChange={() => this.handleRadio("ticket")}
                  disabled={this.props.approved}
                />
                <label className="pl5">Lėktuvu</label>
              </div>
            </div>
          ) : (
            <div className="fz18 fwb">-</div>
          )}
        </td>
        <td key="veiksmai">
          {!this.props.approved && this.props.possibleToClick ? (
            <button
              className={
                this.props.approved
                  ? notActiveClassName
                  : this.props.isUserAvailable
                  ? activeClassName
                  : dangerClassName
              }
              style={{ padding: 4 }}
              onClick={() =>
                this.props.handleClick({
                  startDate: this.props.departureDate,
                  endDate: this.props.returnDate,
                  tripDetailsId: this.props.id,
                  carNeeded: this.state.car,
                  ticketNeeded: this.state.ticket
                })
              }
              disabled={this.props.approved || !this.props.isUserAvailable}
            >
              {this.props.isUserAvailable ? "Patvirtinti" : "Užimtos dienos"}
            </button>
          ) : (
            <div className="fz18 fwb">-</div>
          )}
        </td>
      </>
    );
  }
}

export default Columns;
