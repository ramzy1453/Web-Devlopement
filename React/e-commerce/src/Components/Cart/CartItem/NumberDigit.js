import { Input } from "@mui/material";
import { useState } from "react";

const NumberDigit = (props) => {
  const [value] = useState(+props.children);

  const onChangeQte = (e) => {
    const value = e.target.value;
    if (value > 0) {
      props.onChangeQte(value);
    }
  };

  return <Input type="number" value={value} onChange={onChangeQte} />;
};

export default NumberDigit;
