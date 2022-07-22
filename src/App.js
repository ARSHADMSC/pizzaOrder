import "./styles.css";
const area = document.getElementById("root");
export default function App(event) {
  event.preventDefault;
  return (
    <div className="App">
      <h1>Order Pizza</h1>
      <img
        id="hi"
        src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
        alt=""
      ></img>

      <form>
        <div>
          <label>Name:</label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label>Size:</label>
          <select id="size">
            <option>Large</option>
            <option>Medium</option>
            <option>small</option>
          </select>
        </div>
        <div>
          <label>Pepproni:</label>
          <input type="checkbox" id="pepp"></input>
          <label>Gluten Free:</label>
          <input type="checkbox" id="glut"></input>
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" id="re"></input>
        </div>
        <div>
          <label>Additional Instructions</label>
          <input type="text-area" id="instruct"></input>
        </div>
        <button type="submit" onClick={pizzaOrder}>
          Submit
        </button>
      </form>
    </div>
  );
  function pizzaOrder() {
    let Size = document.getElementById("size").value;
    let Name = document.getElementById("name").value;
    let Quantity = document.getElementById("re").value;
    let Pepproni = document.getElementById("pepp").checked;
    let GlutenFree = document.getElementById("glut").checked;
    let insrtuctor = document.getElementById("instruct").value;
    if (Pepproni === true) {
      area.innerHTML = `<p>Order for ${Quantity} ${Size} pizza(s) that are not Gluten-Free and have Pepperoni for ${Name}</p><br />
      <p>Instructions : ${insrtuctor}</p>`;
    } else if (GlutenFree === true) {
      area.innerHTML = `<p>Order for ${Quantity} ${Size} pizza(s) that have Gluten-Free and don't have Pepperoni for ${Name}</p><br />
      <p>Instructions : ${insrtuctor}</p>`;
    } else {
      area.innerHTML = `<p>Order for ${Quantity} ${Size} pizza(s) that are not Gluten-Free and don't have Pepperoni for ${Name}</p><br />
      <p>Instructions : ${insrtuctor}</p>`;
    }
  }
}
