export default function countReducer(state = { value: 0 }, action) {
  if (action.type === "PLUS") {
    state.value += 1;
  } else if (action.type === "MINUS") {
    state.value -= 1;
  } else {
    return state.value;
  }
}