import React, { useState } from "react";
import { Modal, Button } from "antd";
import ModalDetail from "../Modal/Modal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import btn from "./button.svg";

interface Props {
  status: string;
}

const AddButton = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4vh",
        paddingTop: "3em",
      }}
    >
      <Fab color="primary" aria-label="add" size="small">
        <AddIcon onClick={showModal} />
      </Fab>
      <Modal
        title="Enter Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalDetail status={props.status} notes={""} update={false} />
      </Modal>
    </div>
  );
};

export default AddButton;
