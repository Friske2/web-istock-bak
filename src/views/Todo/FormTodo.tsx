import { useState } from "react";
import { Input, Button } from "antd";
interface PropModel {
  funcAdd: (item: string) => void;
}
type inputEvent = React.FormEvent<HTMLInputElement>;
function FormTodo(props: PropModel) {
  const [value, setValue] = useState("");
  function handleChange(e: inputEvent) {
    setValue(e.currentTarget.value);
  }
  function submit() {
    if (value) {
      props.funcAdd(value);
    }
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      <div>
        <Input placeholder="input text" type="text" onChange={handleChange} />
      </div>
      <div>
        <Button type="primary" onClick={submit}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default FormTodo;
