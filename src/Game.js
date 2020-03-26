import React, { Component } from "react";
import Avocado from "./Avocado";
import "./App.css";
import Result from "./Result";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Game extends Component {
  state = {
    circles: [],

    score: 0,
    remainingTime: 120,
    position: 0
  };
  componentDidMount() {
    this.startGame();
  }
  startGame = () => {
    this.startCountDown(this.state.remainingTime);
    setInterval(() => {
      this.setState({
        circles: this.getCircles()
      });
    }, 1000);
  };
  renderTime = value => {
    if (value === 0) {
      return <div className="timer">Too lale...</div>;
    }
    let seconds = value % 60;
    return (
      <div className="timer">
        <div className="value">
          {Math.floor(value / 60)}:{seconds}
        </div>
      </div>
    );
  };

  getCircles = () => {
    const circlesArray = new Array(9).fill({}).map(() => {
      return { isAvocado: false, isGuacamole: false, loading: false };
    });
    const randomNumber = Math.floor(Math.random() * Math.floor(9));
    circlesArray[randomNumber].isAvocado = true;

    // if (this.avocadoSmashed) {
    //   circlesArray[randomNumber].isGuacamole = true;
    //   this.setState({ position: randomNumber });
    // }
    return circlesArray;
  };
  startCountDown = seconds => {
    let counter = seconds;
    const interval = setInterval(() => {
      counter--;
      this.setState({ remainingTime: counter });
      if (counter <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  };
  avocadoSmashed = () => {
    this.setState({
      circles: this.getCircles(),
      score: this.state.score + 5
    });
  };
  render() {
    const circles = this.state.circles.map((circle, index) => {
      return (
        <Avocado
          key={`circle-${index}`}
          isAvocadoVisible={circle.isAvocado}
          // isGuacamoleVisible={circle.isGuacamole}
          // position={this.state.postion}
          clicked={this.avocadoSmashed}
        />
      );
    });
    return (
      <div className="container header">
        {this.state.remainingTime === 0 && <Result score={this.state.score} />}
        {this.state.circles.length > 0 && this.state.remainingTime > 0 && (
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h2 className="display-4 text-center">
                Score: {this.state.score}
              </h2>
              <CountdownCircleTimer
                isPlaying
                durationSeconds={120}
                colors={[["#edf974", 0.4], ["#edf974", 0.5], ["#A30000"]]}
                renderTime={this.renderTime}
                onComplete={() => [true, 1000]}
              />
              <br></br>
            </div>
            <div class="col-sm-6">{circles}</div>
          </div>
        )}
      </div>
    );
  }
}
export default Game;
