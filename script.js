// Your JS goes here
var body = document.body;

for (var i = 0; i < 63; i++) {
    var div = document.createElement('div');
    // Set each tile's `float` property to `left`
    div.style.float = "left";
    div.style.width = "11.1%";
    div.style.paddingBottom = "11.1%";

    if (i % 2 ===0) {
        div.style.backgroundColor = "red";
    } else {
        div.style.backgroundColor = "black";
    }
    
    body.append(div);
}