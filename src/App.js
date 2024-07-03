import Button from "./components/Button";
import Counter from "./components/Counter";
import Time from "./components/Time";

function App(){
    return(
        <div>
            <h1>Counter Button</h1>
            <Counter /><br></br><br></br>
            <h1>On/Off Button</h1>
            <Button /><br></br><br></br>
            <h1>My Clock</h1>
            <Time />

        </div>
    )
}

export default App;