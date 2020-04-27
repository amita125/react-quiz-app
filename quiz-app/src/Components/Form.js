import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div class="form-group row">
          <label for="playerName" class="col-sm-2 col-form-label">
            Player name :
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="playerName" />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">
              Select Difficulty
            </legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="easy"
                  checked
                />
                <label class="form-check-label" for="gridRadios1">
                  Easy
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="medium"
                />
                <label class="form-check-label" for="gridRadios2">
                  Medium
                </label>
              </div>
              <div class="form-check disabled">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="hard"
                />
                <label class="form-check-label" for="gridRadios3">
                  Hard
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-2">Checkbox</div>
          <div class="col-sm-10">
            <div class="form-group col-md-4">
              <label for="category">Select Category</label>
              <select id="inputState" class="form-control">
                <option selected>Any</option>
                <option>General Knowledge</option>
                <option>Science and nature</option>
                <option>Sports</option>
                <option>Art</option>
                <option>Animals</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
