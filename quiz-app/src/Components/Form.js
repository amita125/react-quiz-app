import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div className="form-group row">
          <label
            htmlFor="playerName"
            className="col-sm-2 col-form-label"
            id="formLabel"
          >
            Player Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="playerName"
              name="playerName"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="category"
            className="col-sm-2 col-form-label"
            id="formLabel"
          >
            Category
          </label>
          <div className="col-sm-10">
            <select
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              {/* <option selected>Any Category</option> */}
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals & Theatres</option>
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
              <option value="31">Entertainment: Japanese Anime & Manga</option>
              <option value="32">Entertainment: Cartoon & Animations</option>
            </select>
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend
              className="col-form-label col-sm-2 pt-0"
              id="difficultSelect"
            >
              Select Difficulty
            </legend>
            <div className="col-sm-10" id="radioDifficult">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="difficulty"
                  id="inlineRadio1"
                  value="easy"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Easy
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="difficulty"
                  id="inlineRadio2"
                  value="medium"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Medium
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="difficulty"
                  id="inlineRadio3"
                  value="hard"
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  Hard
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
