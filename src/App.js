import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SimpleNav from "./UI/SimpleNav";
import CardGroup from "./UI/CardGroup";
import { Heading } from "./UI/Heading";

function App() {
    return (
        <>
            <SimpleNav />
            <Heading />
            <CardGroup />
        </>
    );
}

export default App;
