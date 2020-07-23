import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { url } from "../urls";
import { Row, Col, Button, Spinner, Container } from "reactstrap";
import { toast } from "react-toastify";
import Axios from "axios";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(true);
  const [toggleRegister, setToggleRegister] = useState(true);
  const [user, setUser] = useState({
    pseudo: "",
    email: "",
    password: "",
    avatar: "",
  });
  const history = useHistory();
  //useForm const below
  const { handleSubmit, register, errors } = useForm();

  const uuid = localStorage.getItem("uuid");

  const submitLogs = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.post(`${url}/users/login`, {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("uuid", res.data.uuid);
      setIsLoading(false);
    } catch (error) {
      //import notify
    }
  };

  const submitSigns = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.post(`${url}/users`, {
        pseudo: user.pseudo,
        email: user.email,
        password: user.password,
        avatar: user.avatar,
      });
      localStorage.setItem("uuid", res.data.uuid);
      setIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong...");
    }
  };

  useEffect(() => {
    if (uuid) {
      return history.push("/home");
    }
  }, [uuid]);

  if (toggleRegister) {
    return (
      <Container>
        <Col lg={{ size: 8, offset: 2 }}>
          <h1 style={{ color: "red" }}>SOCIAL BUSHIDO</h1>
        </Col>
        <Col style={{ marginTop: "10vh" }}>
          <Col lg={{ size: 8, offset: 2 }}>
            <Row>
              <Button
                onClick={() => setToggleRegister(!toggleRegister)}
                color="info"
                disabled
              >
                Loging
              </Button>
              <p>OR</p>
              <Button
                onClick={() => setToggleRegister(!toggleRegister)}
                color="info"
                outline
              >
                Signing
              </Button>
            </Row>
          </Col>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h5
                style={{
                  whiteSpace: "nowrap",
                  marginTop: "5vh",
                  marginBottom: "5vh",
                }}
              >
                If you already have an account
              </h5>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h1 style={{ whiteSpace: "nowrap" }}>Log In</h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              md={{ size: 8, offset: 2 }}
              sm={{ size: 10, offset: 1 }}
              xs={{ size: 12 }}
              fluid
            >
              <form onSubmit={handleSubmit(submitLogs)}>
                <label for="pseudo">E-mail</label>
                <div>
                  <input
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    name="email"
                    placeholder="enter your email"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.pseudo && errors.pseudo.message}
                </div>
                <label for="password">Password</label>
                <div>
                  <input
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    name="password"
                    placeholder="write it in the shadow"
                    type={togglePassword ? "password" : "text"}
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.password && errors.password.message}
                </div>

                <Row>
                  <Col>
                    <Button
                      onClick={() => {
                        setTogglePassword(!togglePassword);
                      }}
                      color={togglePassword ? "" : "secondary"}
                      size="sm"
                    >
                      {togglePassword ? "show password" : "hide password"}
                    </Button>
                  </Col>
                </Row>

                <Button type="submit" color="success" disabled={isLoading}>
                  {isLoading ? <Spinner size="sm" /> : "LOGIN"}
                </Button>
              </form>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  } else {
    return (
      <Container>
        <Col lg={{ size: 8, offset: 2 }}>
          <h1 style={{ color: "red" }}>SOCIAL BUSHIDO</h1>
        </Col>
        <Col style={{ marginTop: "10vh" }}>
          <Col lg={{ size: 8, offset: 2 }}>
            <Row>
              <Button
                onClick={() => setToggleRegister(!toggleRegister)}
                color="info"
                outline
              >
                Loging
              </Button>
              <p>OR</p>
              <Button
                onClick={() => setToggleRegister(!toggleRegister)}
                color="info"
                disabled
              >
                Signing
              </Button>
            </Row>
          </Col>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h5
                style={{
                  whiteSpace: "nowrap",
                  marginTop: "5vh",
                  marginBottom: "5vh",
                }}
              >
                You can create an account
              </h5>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h1 style={{ whiteSpace: "nowrap" }}>Sign In</h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              md={{ size: 8, offset: 2 }}
              sm={{ size: 10, offset: 1 }}
              xs={{ size: 12 }}
              fluid
            >
              <form onSubmit={handleSubmit(submitSigns)}>
                <label for="pseudo">Pseudo</label>
                <div>
                  <input
                    onChange={(e) =>
                      setUser({ ...user, pseudo: e.target.value })
                    }
                    name="pseudo"
                    placeholder="enter your ninja name"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.pseudo && errors.pseudo.message}
                </div>
                <label for="email">E-mail</label>
                <div>
                  <input
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    name="email"
                    placeholder="enter your email"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.pseudo && errors.pseudo.message}
                </div>
                <label for="password">Password</label>
                <div>
                  <input
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    name="password"
                    placeholder="write it in the shadow"
                    type={togglePassword ? "password" : "text"}
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.password && errors.password.message}
                </div>
                <Row>
                  <Col>
                    <Button
                      onClick={() => {
                        setTogglePassword(!togglePassword);
                      }}
                      color={togglePassword ? "" : "secondary"}
                      size="sm"
                    >
                      {togglePassword ? "show password" : "hide password"}
                    </Button>
                  </Col>
                </Row>
                <label for="avatar">Avatar</label>
                <div>
                  <input
                    onChange={(e) =>
                      setUser({ ...user, avatar: e.target.value })
                    }
                    name="avatar"
                    placeholder="http://youpic.com"
                  />
                </div>

                <Button type="submit" color="success">
                  {isLoading ? <Spinner size="sm" /> : "LOGIN"}
                </Button>
              </form>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
};

export default Login;
