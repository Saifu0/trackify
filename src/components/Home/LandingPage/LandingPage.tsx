import React,{ useEffect } from "react";
import { useHistory } from "react-router-dom";
import frame2 from "./model_view.png"
import frame1 from './dashboard.png'
import { Row,Layout,Col,Button} from "antd";
import "./index.css";


const LandingPage = () => {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token")) {
          history.push("/dashboard");
        }
      },[]);
      const Handler1 = () => {
        history.push("/dashboard");
      }
      const Handler2 = () => {
        history.push("/login");
      }


    const { Content} = Layout;
     const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(

      <Layout>
      <Content>  

<Row style={{display: "flex",justifyContent: "center",height: "100vh",width: "100vw"}}>
<Col style={{display: "flex",alignItems: "center",justifyContent: "center",paddingTop: "8vh"}} span={11} xs={22} sm={22} lg={11}>
  <Row style={{display: "flex",justifyContent: "center"}}>
  <Row className="glow">  Simplify Your Job Hunt!</Row>
  <Row style={{display: "flex",justifyContent: "center",alignItems: "center",paddingTop: ".5em"}}><h3 style={{color: "#A0A0A0",fontSize: "1.4em"}}>Track your application progress in a seamless and intuitive way <b style={{color: "#7BC74D"}}>✔</b></h3></Row>
  
  <br></br>

  <Row style={{display: "flex",justifyContent: "center",paddingTop: "1em"}}>
<Button   size="small" shape="round"  >

  </Button>
  <Button onClick={Handler2}  size="large"  type="primary" shape="round" style={{backgroundColor:"#1DA1F2",fontWeight: "bold"}}>
    Sign up / Sign in
  </Button>
</Row>
</Row>
</Col>
<Col style={{display: "flex",justifyContent: "center",alignItems: "center"}} span={12} sm={22} xs={22}lg={12}>
<img style={{height: "60%",width: "90%",paddingTop: "3em",borderRadius: "1em"}} src={frame1} alt="landingimage"></img>
</Col>
</Row>

<Row style={{display: "flex",justifyContent: "center",height: "100vh",width: "100vw"}}>
<Col style={{display: "flex",justifyContent: "center",alignItems: "center"}} span={11} sm={22} xs={22}lg={11}>
<img style={{height: "60%",width: "90%",paddingTop: "3em",borderRadius: "1em"}} src={frame2} alt="landingimage"></img>
</Col>

<Col style={{display: "flex",alignItems: "center",justifyContent: "center",paddingTop: "3vh"}} span={11} xs={24} sm={24} lg={11}>
  <Row style={{display: "flex",justifyContent: "center"}}>
  <Row className="glow">  Create a Card For Each Application!</Row>
  <Row style={{display: "flex",justifyContent: "center",alignItems: "center",paddingTop: "1em"}}><h3 style={{color: "#A0A0A0",fontSize: "1.4em"}}>Application process is visualized like no spreadsheet can do <b style={{color: "#7BC74D"}}>✔</b></h3></Row>
  
  <br></br>


  <Row style={{display: "flex",justifyContent: "center",paddingTop: "1em",paddingBottom: "1em"}}>
<Button  style={{marginRight: "2em"}} size="small" shape="round">
 
  </Button>
  <Button onClick={Handler2}  size="large" type="primary" shape="round" style={{backgroundColor:"#1DA1F2",fontWeight: "bold"}}>
    Sign up / Sign in
  </Button>
</Row>
</Row>
</Col>
</Row> 




</Content>
</Layout>

    );
};

export default LandingPage;