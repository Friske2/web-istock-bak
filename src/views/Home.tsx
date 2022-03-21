import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/CouterSlice";
import { Button } from "antd";
import { useEffect } from "react";
import { getMockApi } from "../services/mock";
interface StateCounter {
  counter: {
    value: number;
  };
}
function Home() {
  const count = useSelector((state: StateCounter) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getMockApi().then((data) => {
      console.log(data);
    });
  });

  return (
    <div>
      <h1>Home</h1>
      count : {count}
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
}

export default Home;
