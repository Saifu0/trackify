import React, { useState } from "react";
import axios from "axios";
import { Col, Button } from "antd";
import Column from "../Column/Column";
import Category from "../Category/Category";
import AddButton from "../AddButton/AddButton";

interface Props {
  color: string;
  text: string;
  status: string;
}
function Heading(props: Props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(`/api/${props.status}`, config)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  let linkStyle;
  if (hover) {
    linkStyle = { transform: "scale(1.3,1.3)" };
  } else linkStyle = { transform: "scale(1,1)" };
  return (
    <Col
      span={"20%"}
      style={{ height: "88vh", alignItems: "center", marginTop: "12vh" }}
    >
      <Category color={props.color} text={props.text} />
      <Col
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "82vh",
          maxHeight: "82vh",
          position: "relative",
        }}
      >
        <Col
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "70vh",
            position: "static",
          }}
        >
          <Column data={data} />
        </Col>
        <Col style={{ position: "static", height: "12vh" }}>
          <div
            style={linkStyle}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <AddButton
              status={props.status === "toapply" ? "to apply" : props.status}
            />
          </div>
        </Col>
      </Col>
    </Col>
  );
}

export default Heading;
