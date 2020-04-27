import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div class="form-group row">
          <label for="playerName" class="col-sm-2 col-form-label">
            Player Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="playerName" />
          </div>
        </div>
        <div class="form-group row">
          <label for="category" class="col-sm-2 col-form-label">
            Category
          </label>
          <div class="col-sm-10">
            <select
              class="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Any Category</option>
              <option value="general">General Knowledge</option>
              <option value="science">Science and Nature</option>
              <option value="sports">Sports</option>
              <option value="art">Art</option>
              <option value="animals">Animals</option>
            </select>
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">
              Select Difficulty
            </legend>
            <div class="col-sm-10">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="difficulty"
                  id="inlineRadio1"
                  value="easy"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Easy
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="difficulty"
                  id="inlineRadio2"
                  value="medium"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Medium
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="difficulty"
                  id="inlineRadio3"
                  value="hard"
                  disabled
                />
                <label class="form-check-label" for="inlineRadio3">
                  Hard
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
