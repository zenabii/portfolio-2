import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React from "react";
import holidaze from "../images/holidaze-screenshot.PNG";
import ca from "../images/js-ca-screenshot.PNG";
import semesterProject from "../images/semester-project-2-screenshot.PNG";

function CardGroup() {
    return (
        <>
            <Container>
                <Row>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={holidaze} />
                        <Card.Body>
                            <Card.Title>Project Exam 2</Card.Title>
                            <Card.Text>
                                Holidaze is a booking site for anyone who wish
                                to visit Iceland. The user can send requests for
                                hotels and activities they wish to experience
                                during ther stay.
                            </Card.Text>
                            <Button
                                variant="primary"
                                href="https://github.com/Noroff-FEU-Assignments/project-exam-2-zenabii"
                            >
                                GitHub Repo
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={semesterProject} />
                        <Card.Body>
                            <Card.Title>Semester Project 2</Card.Title>
                            <Card.Text>
                                Cece Studio is a high end fashion commerce site
                                that mainly focus on shoes. They go after a very
                                specific style and is considered one of the best
                                in their field for rare shoes.
                            </Card.Text>
                            <Button
                                variant="primary"
                                href="https://github.com/zenabii/cece-studio"
                            >
                                GitHub Repo
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={ca} />
                        <Card.Body>
                            <Card.Title>JavaScript Frameworks CA</Card.Title>
                            <Card.Text>
                                This is the Course Assignment in JavaScript. The
                                project is based on React and loops through
                                Disney characters using an open Disney API.
                                There is also an admin panel login that only
                                displays content if the user is logged in.
                            </Card.Text>
                            <Button
                                variant="primary"
                                href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-zenabii"
                            >
                                GitHub Repo
                            </Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}

export default CardGroup;
