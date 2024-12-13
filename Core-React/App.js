/** Core React */
                // {Attribute to tags of html} h1 tag will have an id head1
// const heading = React.createElement("h1", { id: "head1" }, "Jai Shree Ram");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

 
/** Create nested element in react like HTML
 * 
<div id="parent">
        <div id ="chile">
                <h1>I'm h1 tag</h1>
        </div>
</div>
* 
* if we want to create sibling like below in react, 
the last prop will be an array so we can write as many siblings as we want
<div id="parent">
        <div id ="chile">
                <h1>I'm h1 tag</h1>
                <h2>I'm h2 tag</h2>
        </div>
</div>
 */

const parent = React.createElement("div", {id: "parent"}, 
        React.createElement("div", {id:"child"}, 
                [React.createElement("h1", {id: "heading"}, "I'm h1 tag"), React.createElement("h2", {id: "heading2"}, "I'm h2 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);                