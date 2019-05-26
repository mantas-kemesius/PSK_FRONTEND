import * as jsPDF from "jspdf";
import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DynamicColumnChart extends Component {
  state = {
    format: "jpg"
  };
  handleFormatChange = e => {
    this.setState({
      format: e.target.value
    });
  };
  handleYearsChange = e => {
    this.props.handleYearsChange(e.target.value);
  };
  render() {
    const options = {
      title: {
        text: "Vykstančios kelionės"
      },
      data: [
        {
          type: "column",
          dataPoints: [...this.props.metrics]
        }
      ]
    };
    return (
      <div className="w100p df jc-center pt20">
        <div className="w90p b-s1-grey p30 bs-light">
          <div className="w30p">
            <select
              className="w100p h50 p10 fz18 b-s1-grey"
              value={this.state.years}
              onChange={this.handleYearsChange}
            >
              {this.props.years.map(y => (
                <option
                  key={`${y}`}
                  value={`${y}`}
                  selected={y === this.props.year}
                >
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div>
            <CanvasJSChart
              options={options}
              onRef={ref => (this.chart = ref)}
            />
          </div>
          <div className="df jc-s-evenly">
            <div className="w30p">
              <select
                className="w100p h50 p10 fz18 b-s1-grey"
                value={this.props.year}
                onChange={this.handleFormatChange}
              >
                <option key="1" value="jpg">
                  JPG
                </option>
                <option key="2" value="png">
                  PNG
                </option>
                <option key="3" value="pdf">
                  PDF
                </option>
              </select>
            </div>
            <div className="w30p">
              <button
                className="w100p h50 p10 fz18 bg-default cw fwb"
                onClick={() => {
                  if (this.state.format === "pdf") {
                    const dataURL = document
                      .getElementsByClassName("canvasjs-chart-canvas")[0]
                      .toDataURL();
                    var pdf = new jsPDF();
                    pdf.addImage(dataURL, "JPEG", 20, 20, 170, 80);
                    pdf.save("download.pdf");
                  } else {
                    this.chart.exportChart({ format: this.state.format });
                  }
                }}
              >
                Atsisiūsti
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DynamicColumnChart;
