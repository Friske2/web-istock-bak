import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
interface loginForm {
  username: string;
  password: string;
  remember: boolean;
}
function Login() {
  const navigate = useNavigate();
  const onFinish = (values: loginForm) => {
    const { username, remember } = values;
    sessionStorage.setItem("user", JSON.stringify({ username, remember }));
    navigate("/");
    // sessionStorage.getItem('isLogin',isLogin.toString())
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="h-screen">
        <Form
          className="m-auto"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
