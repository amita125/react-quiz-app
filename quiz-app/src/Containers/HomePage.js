import React, { Component } from "react";
import Instruction from "../Components/Instruction";
import { Redirect } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      level: "",
      players: [{ name: "", score: "0" }],
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  };
  handleLevel = (e) => {
    this.setState({ level: e.target.value });
  };

  handlePlayersName = (playerId) => (e) => {
    const newPlayer = this.state.players.map((player, index) => {
      if (playerId !== index) return player;
      return { ...player, name: e.target.value, score: 0 };
    });

    this.setState({ players: newPlayer });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loadFunction(this.state);
  };

  handleAddPlayer = () => {
    this.setState({
      players: this.state.players.concat([{ name: "" }]),
    });
  };

  handleRemovePlayer = (playerId) => () => {
    this.setState({
      players: this.state.players.filter((s, index) => playerId !== index),
    });
  };

  render() {
    if (this.props.redirect === true) {
      return <Redirect to="/quiz" />;
    }
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-6" id="asideArea">
            <Instruction />
          </div>
          <div className="col-lg-6">
            <div className="App-body">
              <span className="iconForm" role="img" aria-label="emoji">
                😕≈🤯🤜🧠~~~~~👀💢
              </span>
              <div className="playerForm">
                <form onSubmit={this.handleSubmit}>
                  {this.state.players.map((player, playerId) => (
                    <div className="form-group row" key={`${playerId + 1}`}>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          placeholder={`Player #${playerId + 1} name`}
                          className="form-control"
                          id="playerName"
                          name={`Player${playerId + 1}`}
                          value={player.name}
                          onChange={this.handlePlayersName(playerId)}
                          required
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            onClick={this.handleRemovePlayer(playerId)}
                            className="btn btn-danger"
                            id="removePlayerButton"
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="form-group row">
                    <button
                      type="button"
                      onClick={this.handleAddPlayer}
                      className="btn btn-primary btn-lg btn-block"
                      id="addPlayerButton"
                    >
                      Add Player
                    </button>
                  </div>

                  <div className="form-group row">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="category"
                          id="formLabel"
                        >
                          Category
                        </label>
                      </div>
                      <select
                        className="custom-select"
                        id="inlineFormCustomSelectPref"
                        value={this.state.category}
                        onChange={this.handleCategory}
                      >
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">
                          Entertainment: Musicals & Theatres
                        </option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">
                          Entertainment: Japanese Anime & Manga
                        </option>
                        <option value="32">
                          Entertainment: Cartoon & Animations
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="input-group-text">
                      Select Difficulty
                    </label>
                    <div className="radioButtonGroup">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="customRadioInline1"
                          name="difficulty"
                          className="custom-control-input"
                          value="easy"
                          onChange={this.handleLevel}
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline1"
                        >
                          Easy
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="customRadioInline2"
                          name="difficulty"
                          className="custom-control-input"
                          value="medium"
                          onChange={this.handleLevel}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline2"
                        >
                          Medium
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="customRadioInline3"
                          name="difficulty"
                          className="custom-control-input"
                          value="hard"
                          onChange={this.handleLevel}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline3"
                        >
                          Hard
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        id="submitButton"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
