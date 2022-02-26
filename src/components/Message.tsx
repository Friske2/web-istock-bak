import { message } from "antd";

export function success(msg: string | undefined) {
  if (!msg) msg = "Save complete";
  message.success(msg);
}

export function error(msg: string | undefined) {
  if (!msg) msg = "Save failed";
  message.error(msg);
}

export function warning(msg: string | undefined) {
  if (!msg) msg = "Warning !";
  message.warning(msg);
}

export function loading() {
  message.loading("Loading...");
}
