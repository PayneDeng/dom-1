const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');
dom.warp(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, "title", "Hi I am Payne");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);

dom.text(test, "你好，这是新的内容");
dom.text(test);

dom.style(test, { border: "1px solid red", color: "blue" });
