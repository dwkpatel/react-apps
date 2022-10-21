import "./styles.css";
import NumbersList from "./NumbersList";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  return <NumbersList numbers={numbers} />;
}
