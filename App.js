/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *          <h2>I am H2 tag</h2>
 * </div>
 * </div>
 * 
 * 
 * 
 */
const parent = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id: "child"}, [
React.createElement("h1",{},"I am H1 Tag"),
React.createElement("p",{},"I am p Tag")
]))
const heading = React.createElement("h1",{ id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);