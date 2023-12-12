import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

function Home() {
  const count = useSelector(function selector(state) {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  // console.log({ count })
  return (
    <div className="is-flex is-justify-content-center is-align-items-center">
      <button
        onClick={() => {
          dispatch(decrement(2));
        }}
        className="button is-danger"
      >
        Decrement
      </button>
      <span className="is-size-1 mx-4">{count}</span>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="button is-primary"
      >
        Increment
      </button>
    </div>
  );
}

export default Home;
