import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/CouterSlice";
import { Button } from "antd";
interface StateCounter {
  counter: {
    value: number;
  };
}
function Home() {
  const count = useSelector((state: StateCounter) => state.counter.value);
  const dispatch = useDispatch();

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
