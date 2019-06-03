import React from "react";

const cutDate = date => {
  const index = date.indexOf("T");
  return date.substr(0, index);
};

class Notifications extends React.Component {
  state = {
    car: [],
    ticket: []
  };
  componentDidUpdate() {
    if (this.props.arr.length > 0 && this.state.car.length === 0) {
      const car = [];
      const ticket = [];
      this.props.arr.forEach(item => {
        car.push(item.carNeeded);
        ticket.push(item.ticketNeeded);
      });

      this.setState({
        car,
        ticket
      });
    }
  }
  handleRadio = (transport, key) => {
    const car = [...this.state.car];
    const ticket = [...this.state.ticket];
    if (transport === "car") {
      car[key] = !car[key];
      this.setState({
        car: car
      });
    } else {
      ticket[key] = !ticket[key];
      this.setState({
        ticket: ticket
      });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div
        className="w100p df pb20 mt20"
        style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
      >
        {this.props.arr &&
          this.props.arr.map((item, key) => {
            const text = item.isApproved
              ? "Patvirtinta"
              : item.cantGo
              ? "Kelionė vyksta užimtom dienom"
              : "Nepatvirtinta";
            const style = item.isApproved
              ? "bg-success cw"
              : item.cantGo
              ? "bg-danger cw"
              : "";
            return (
              <div
                className={`b-s1-grey p30 bs-light ${style}`}
                key={`${item.tripDetailsId}`}
                style={{ width: "25%", marginTop: 20 }}
              >
                <div>
                  <div className="w100p fwb fz20 tac">{text}</div>
                  <div className="w100p pt20 pb20">
                    <strong>Išvyka į:</strong>{" "}
                    {item.trip.destinationOffice.country},{" "}
                    {item.trip.destinationOffice.city},{" "}
                    {item.trip.destinationOffice.streetAddress}
                  </div>
                  <div className="w100p pb20">
                    <strong>Išvykimo data:</strong>{" "}
                    {cutDate(item.trip.departureDate)}
                  </div>
                  <div className="w100p pb20">
                    <strong>Grįžimo data:</strong>{" "}
                    {cutDate(item.trip.returnDate)}
                  </div>
                  <div className="w100p pb20">
                    <strong>Transporto priemonė:</strong>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          value="option2"
                          checked={this.state.car[key]}
                          onChange={() => this.handleRadio("car", key)}
                          disabled={item.isApproved || item.cantGo}
                        />
                        <label className="pl5">Automobiliu</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          value="option2"
                          checked={this.state.ticket[key]}
                          onChange={() => this.handleRadio("ticket", key)}
                          disabled={item.isApproved || item.cantGo}
                        />
                        <label className="pl5">Lėktuvu</label>
                      </div>
                    </div>
                  </div>
                  <div className="w100p pb20">
                    <strong>Apgyvendinimas:</strong> {item.live}
                  </div>
                </div>
                {!item.cantGo && !item.isApproved && (
                  <div className="pt20">
                    <button
                      className="w100p h50 p10 fz18 bg-success bg-h-success cw fwb"
                      onClick={() =>
                        this.props.handleClick({
                          tripDetailsId: item.tripDetailsId,
                          startDate: item.trip.departureDate,
                          endDate: item.trip.departureDate,
                          carNeeded: this.state.car[key],
                          ticketNeeded: this.state.ticket[key]
                        })
                      }
                    >
                      Patvirtinti užklausą
                    </button>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Notifications;
