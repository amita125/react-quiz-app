import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div className="form-group row">
          <label htmlFor="playerName" className="col-sm-2 col-form-label">
            Player Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="playerName" name="playerName"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="category" className="col-sm-2 col-form-label">
            Category
          </label>
          <div className="col-sm-10">
            <select
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              {/* <option selected>Any Category</option> */}
              <option value="general">General Knowledge</option>
              <option value="science">Science and Nature</option>
              <option value="sports">Sports</option>
              <option value="art">Art</option>
              <option value="animals">Animals</option>
            </select>
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">
              Select Difficulty
            </legend>
            <div className="col-sm-10">
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
                  disabled
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
