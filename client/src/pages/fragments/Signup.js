import React, { Component } from "react";

import userAPI from "../../utils/userAPI";
import { Redirect, Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Signup extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        passwordConf: "",
    };

    componentDidMount() {}

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            userAPI
                .signup({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    passwordConf: this.state.passwordConf,
                })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res);
                        this.props.setUserState();
                        // return <Redirect to="/comments" />
                    }
                })
                .catch((err) => console.log(err.response.data));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="12">
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="username (required)"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="email (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="password (required)"
                                type="password"
                            />
                            <Input
                                value={this.state.passwordConf}
                                onChange={this.handleInputChange}
                                name="passwordConf"
                                placeholder="confirm password (required)"
                                type="password"
                            />

                            <FormBtn
                                // disabled={!(this.state.email && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                signup
                            </FormBtn>
                            <Link to="/">
                                <FormBtn> Login </FormBtn>
                            </Link>
                        </form>
                    </Col>
                </Row>
                {/* redirect on authenticated */}
                {this.props.authenticated ? (
                    <Redirect to="/comments" />
                ) : (
                    <div></div>
                )}
            </Container>
        );
    }
}

export default Signup;
