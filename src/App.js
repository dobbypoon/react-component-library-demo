import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { IonPage, IonContent } from "@ionic/react";

import Form from "./Form/Form";
import Modal from "./Modal/Modal";

import "./App.scss";

function AppRouter() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Form</Link>
                    </li>
					<li>
                        <Link to="/modal">Modal</Link>
                    </li>
                </ul>
            </nav>
			<Switch>
				<Route path="/modal">
					<Modal />
				</Route>
				<Route path="/">
					<Form />
				</Route>
			</Switch>
        </Router>
    );
}

function App() {
    return (
        <IonPage>
            <IonContent>
                <div className="App">
                    <AppRouter />
                </div>
            </IonContent>
        </IonPage>
	);
}

export default App;
