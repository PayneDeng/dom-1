const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');
dom.warp(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test,'title','Hi I am Payne')
