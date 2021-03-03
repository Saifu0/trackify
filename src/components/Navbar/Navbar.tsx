import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import { UnorderedListOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from './logo.png';

const Navbar = () => {
  const history = useHistory();

  const Handler1 = () => {
    history.push("/about");
  };
  const Handler2 = () => {
    history.push("/contact");
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    history.push("/");
  }

  return (
    <Layout style={{ width: "100%" }}>
      <Menu
        style={{
          width: "100%",
          position: "fixed",
          zIndex: 1,
          display: "flex",
          fontFamily: "'Cinzel', serif",
          height: "10vh",
          alignItems: "center",
        }}
        mode="horizontal"
      >
        <Menu.Item
          onClick={() => history.push("/")}
          key="mail"
          style={{ fontSize: "2em"}}
        >
          <img
            style={{ paddingRight: ".5em" }}
            src={logo}
            alt="logo"
          ></img>
          <b style={{ }}>Trackify</b>
        </Menu.Item>
        <Menu.Item>
          <UnorderedListOutlined
            style={{ fontSize: "2em" }}
            onClick={showDrawer}
          />
        </Menu.Item>
      </Menu>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu>
          <Menu.Item key="1" style={{ fontSize: "1.3em" }} onClick={Handler1}>
            About Us
          </Menu.Item>
          <Menu.Item key="2" style={{ fontSize: "1.3em" }} onClick={Handler2}>
            Contact US
          </Menu.Item>
          <Menu.Item>
            <hr></hr>
          </Menu.Item>
          <Menu.ItemGroup title="Team">
            <Menu.Item key="3" style={{ fontSize: "1.3em" }}>
              <a
                href={
                  "https://www.linkedin.com/in/saifur-rehman-khan-5770a9172/"
                }
                target={"_blank"}
              >
                Saifur Rehman
              </a>
            </Menu.Item>
            <Menu.Item key="4" style={{ fontSize: "1.3em" }}>
              <a
                href={"https://www.linkedin.com/in/nihal-ahmad-46042a192"}
                target={"_blank"}
              >
                Nihal Ahmad
              </a>
            </Menu.Item>
            <Menu.Item>
              <hr></hr>
            </Menu.Item>
            <Menu.Item key="5" style={{ fontSize: "1.3em" }}>
              {
                localStorage.getItem("token") ? 
              <Button type="ghost" htmlType="submit" onClick={handleLogout}>Logout <LogoutOutlined /></Button>
                :
                <hr/>
              }
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;
