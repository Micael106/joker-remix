import { Form } from "remix";

export default function NewJokeRoute() {
    return (
      <div>
        <p>Add your own hilarous joke</p>
        <form method="post">
          <div>
            <label>
              Name: <input type="text" name="name"></input>
            </label>
          </div>
          <div>
            <label>
              Content: <textarea name="content"></textarea>
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }