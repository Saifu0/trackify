import React from 'react';
import axios from 'axios';
import { Col } from 'antd';
import Column from "../Column/Column";
import Category from '../Category/Category';
import AddButton from '../AddButton/AddButton';

interface Props{
    color : string;
    text : string;
    status : string;    
}
function Heading(props: Props) {

    const [data, setData ] = React.useState([]);

    React.useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        };
        axios.get(`/api/${props.status}`,config)
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            console.log(err.message);
        });
    },[]);

    return (
        <Col span={"20%"} style={{height: "90vh",marginTop: "12vh"}}>
            <Category color={props.color} text={props.text} />
            <Col  className="css" style={{ overflowY: "scroll",height: "70vh", }}>
                <Column data={data}/>
            </Col>
            <AddButton status={props.status==="toapply" ? "to apply" : props.status}/>
        </Col>
    );
}

export default Heading;
