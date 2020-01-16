import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// router : url 을 통해 component 를 불러온다.
function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* 라우터가 '/' 를 인식해서 home 과 about 을 동시에 렌더링한다. */}
      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} /> */}
      {/* exact={true} => path와 일치하는 url 일 때만 인식 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
