import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'


export const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <h1>Sign In</h1>
                    <Form>
                    <Form.Group controlId='username'>
                            <Form.Label>
                                Username
                    </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId='password'>
                            <Form.Label>
                                Password
                        </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Button type="submit" variant='primary'>Sign In</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}