import { ItemsList } from "./interface";
import { confirm } from "../../components/Modal";
import { List, Tag, Button } from "antd";
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
  function isTag(index: number) {
    if (index === 0) return <Tag color="success">New</Tag>;
  }
  return (
    <List
      bordered
      dataSource={props.items}
      renderItem={(item, index) => (
        <List.Item>
          <div className="flex w-full justify-between">
            <div className="my-auto">
              {isTag(index)} {item.text}
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
