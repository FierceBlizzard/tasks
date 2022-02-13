import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import pfp from "C:/Users/abhik/tasks/src/assets/pfp.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Iclyn
            </p>
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <h1>New Header for task</h1>
            <img src={pfp} alt="Me as a picrew" />
            <br></br>
            <div className="list-centering">
                <ol>
                    <li>The M2 pro max chip will be the best</li>
                    <li>The new amd series chip</li>
                    <li>Intel will last</li>
                </ol>
            </div>
            <div className="rect">
                <Container>
                    <Row>
                        <Col>First Column</Col>
                        <Col>Second Column.</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
