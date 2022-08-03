import './App.css'
import { TypeOfFood} from "./component/food/typeofFood";
import {Parent} from "./component/food/parent"

function App() {
  return (
    <div>
      <h1>Hello World</h1>

<p>Lets render this to the DOM</p>
<ul>
  <li>Polao</li>
  <li>Biriyani</li>
  <li>Chiken Chap</li>
</ul>
      <Parent/>
      <TypeOfFood />
    </div>
  );
}

export default App;