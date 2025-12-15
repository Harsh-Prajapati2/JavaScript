function changeBackgroundColor(selector) {
  //Implement your function here
    let color = document.querySelectorAll(selector);
    // color.backgroundColor = yellow;
    // using setAttribute
    Array.from(color).forEach(cl => cl.setAttribute("background-color", "yellow"));
    
}
changeBackgroundColor("my-class");
changeBackgroundColor("my-id");
// changeBackgroundColor("#my-id");
// changeBackgroundColor("button");
