import { Modal } from "antd";
interface ModalProp {
  title?: string;
  content?: string;
  okText?: string;
  cancelText?: string;
  onOk: () => void;
}
export function confirm(props: ModalProp) {
  Modal.confirm({
    title: props.title || "Do you Want to delete these items?",
    okText: props.okText || "OK",
    cancelText: props.cancelText || "Cancel",
    onOk: props.onOk,
  });
}
