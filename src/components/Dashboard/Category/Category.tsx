import React from "react";
import { Tag } from "antd";

interface Props {
  color: string;
  text: string;
}

const Category = (props: Props) => {
  return (
    <div>
      <Tag
        color={props.color}
        style={{
          width: "12.5em",
          height: "1.3em",
          fontSize: "2em",
          textAlign: "center",
          marginLeft: 20,
          paddingTop: ".2em",
          borderRadius: "1em",
        }}
      >
        {props.text}
      </Tag>
    </div>
  );
};

export default Category;
