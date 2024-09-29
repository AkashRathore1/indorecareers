import './Main.css';

function Main(props) {
  return (
    <>
      <div id="main">
        <h1>Main Component</h1>
        <h4>Add result main component</h4>
        <p>a = {props.a}</p>
        <p>b = {props.b}</p>
        <p>add = {props.a + props.b}</p>
      </div>
    </>
  );
}

export default Main;