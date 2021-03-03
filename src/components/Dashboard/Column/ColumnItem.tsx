import React from 'react';
import ModalDetail from '.././Modal/Modal';
import { Card, Modal } from 'antd';
import { CSSProperties } from '@material-ui/styles';

const gridStyle : CSSProperties = {
    width: '100%',
    textAlign: 'center',
    backgroundColor : '#141414'
};


interface Data{
  id : number;
  company : string;
  notes : string;
  role : string;
  applied_date : string;
  status : string;
}

interface Props {
  data : Data
}


const ColumnItem = (props : Props) => {
    const [ isModalVisible, setIsModalVisible] = React.useState(false)

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <div style={{ width:350, backgroundColor : "#ccc" }}>
             <div>
              <div onClick={showModal} >
                <Card.Grid style={gridStyle}>
                    <p>{props.data.company} | <strong>{props.data.role}</strong></p>
                    <i>Date : {props.data.applied_date}</i>
                </Card.Grid>
              </div>
              <Modal title="Enter Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <ModalDetail
                      id={props.data.id}
                      company={props.data.company}
                      notes={props.data.notes}
                      position={props.data.role}
                      status={props.data.status}
                      date={props.data.applied_date}
                      update={true}
                  />
              </Modal>
            </div>
        </div>
    )
}

export default ColumnItem
