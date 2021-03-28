import React from "react";
import ColumnItem from "./ColumnItem";

interface Data {
  id: number;
  company: string;
  notes: string;
  role: string;
  applied_date: string;
  status: string;
}

interface Props {
  data: Data[];
}

const Column = (props: Props) => {
  return (
    <div style={{ width: 350, marginLeft: 20 }}>
      {props.data.map((d, index) => {
        return <ColumnItem data={d} key={index} />;
      })}
    </div>
  );
};

export default Column;
