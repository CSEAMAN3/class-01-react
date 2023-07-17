import "./Grid.css";

import Row from "../Row/Row";

export default function Grid() {
  return (
    <div className="grid-div">
      <Row startNum={1} name={"val"} />
      <Row startNum={4} name={"chris"} />
      <Row startNum={7} name={"chidi"} />
    </div>
  );
}
