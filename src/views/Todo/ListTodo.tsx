import { ItemsList } from "./interface";
import { confirm } from "../../components/Modal";
import { List, Typography, Button } from "antd";
interface PropListTodo {
  funcDelete: (item: number) => void;
  items: ItemsList[];
}
function ListTodo(props: PropListTodo) {
  function handleDeleted(id: number) {
    confirm({
      onOk: function () {
        props.funcDelete(id);
      },
    });
  }
  return (
    <List
      bordered
      dataSource={props.items}
      renderItem={(item) => (
        <List.Item>
          <div className="flex w-full justify-between">
            <div className="my-auto">
              <Typography.Text mark>[New]</Typography.Text> {item.text}
            </div>
            <div>
              <Button
                type="link"
                onClick={() => {
                  handleDeleted(item.id);
                }}
              >
                delete
              </Button>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
}

export default ListTodo;
