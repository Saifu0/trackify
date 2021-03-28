import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import frame2 from "./model_view.jpeg";
import frame1 from "./dashboard.jpeg";
import { Row, Layout, Col, Button } from "antd";
import "./index.css";

const LandingPage = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/dashboard");
    }
  }, []);

  const Handler2 = () => {
    history.push("/login");
  };
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const { Content } = Layout;
  let linkStyle;
  if (hover) {
    linkStyle = { transform: "scale(1.3,1.3)", backgroundColor: "#1DA1F2" };
  } else linkStyle = { transform: "scale(1,1)", backgroundColor: "#1DA1F2" };
  return (
    <Layout style={{ backgroundColor: "#162129" }}>
      <Content style={{ paddingRight: "1em" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "8vh",
            }}
            span={12}
            xs={22}
            sm={22}
            lg={12}
          >
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col span={24} className="glow">
                {" "}
                Simplify Your Job Hunt!
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "1em",
                }}
              >
                <h3
                  style={{
                    color: "#A0A0A0",
                    fontSize: "1.4em",
                    paddingLeft: ".4em",
                  }}
                >
                  Track your application progress in a seamless and intuitive
                  way <b style={{ color: "#7BC74D" }}>✔</b>
                </h3>
              </Col>

              <br></br>

              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "2em",
                }}
              >
                <Button
                  onClick={Handler2}
                  style={linkStyle}
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                  size="large"
                  type="primary"
                  shape="round"
                >
                  <strong> Sign up / Sign in</strong>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={11}
            sm={22}
            xs={22}
            lg={11}
          >
            <img className="image" src={frame1} alt="landingimage"></img>
          </Col>
        </Row>

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={11}
            sm={22}
            xs={22}
            lg={11}
          >
            <img className="image" src={frame2} alt="landingimage"></img>
          </Col>

          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "3vh",
            }}
            span={11}
            xs={22}
            sm={22}
            lg={11}
          >
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col span={24} className="glow">
                {" "}
                Create a Card For Each Application!
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "1em",
                }}
              >
                <h3 style={{ color: "#A0A0A0", fontSize: "1.4em" }}>
                  Application process is visualized like no spreadsheet can do{" "}
                  <b style={{ color: "#7BC74D" }}>✔</b>
                </h3>
              </Col>

              <br></br>

              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "2em",
                  paddingBottom: "1em",
                }}
              >
                <Button
                  onClick={Handler2}
                  style={linkStyle}
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                  size="large"
                  type="primary"
                  shape="round"
                >
                  <strong>Sign up / Sign in</strong>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LandingPage;
