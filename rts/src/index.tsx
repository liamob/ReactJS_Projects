import ReactDOM from "react-dom";

//const el = document.getElementById("root");

//const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
