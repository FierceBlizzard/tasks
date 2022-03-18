import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [isStudent, setPosition] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUsername] = useState<string>("Your name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editMode"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode && (
                <Form.Check
                    type="switch"
                    id="a-student"
                    label="Are you a student?"
                    checked={isStudent}
                    disabled={!editMode}
                    onChange={() => setPosition(!isStudent)}
                />
            )}
            {editMode && (
                <Form.Group controlId="UserName">
                    <Form.Label>Change username: </Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={(event: ChangeEvent) =>
                            setUsername(event.target.value)
                        }
                    />
                </Form.Group>
            )}
            <div>
                {!editMode && isStudent && <span>{userName} is a student</span>}
                {!editMode && !isStudent && (
                    <span>{userName} is not a student</span>
                )}
            </div>
        </div>
    );
}
