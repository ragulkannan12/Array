// Function to display results for array methods
function displayArrayResult(method) {
    const result = document.getElementById(`result-${method}`);
    let arr = [1, 2, 3];
    let output;
  
    switch (method) {
      case "length":
        output = arr.length;
        break;
      case "toString":
        output = arr.toString();
        break;
      case "at":
        output = arr.at(1);
        break;
      case "join":
        output = arr.join(" - ");
        break;
      case "pop":
        arr.pop();
        output = arr;
        break;
      case "push":
        arr.push(4);
        output = arr;
        break;
    }
  
    result.innerHTML = `Result: ${output}`;
  }
  
  // Function to display results for string methods
  function displayStringResult(method) {
    const result = document.getElementById(`result-${method}`);
    let str = "hello";
    let output;
  
    switch (method) {
      case "strLength":
        output = str.length;
        break;
      case "charAt":
        output = str.charAt(1); // e.g., returns "e"
        break;
      case "charCodeAt":
        output = str.charCodeAt(1); // e.g., returns Unicode of "e"
        break;
      case "at":
        output = str.at(1); // e.g., returns "e"
        break;
      case "bracketNotation":
        output = str[1]; // e.g., returns "e"
        break;
      case "slice":
        output = str.slice(1, 4); // e.g., returns "ell"
        break;
      case "substring":
        output = str.substring(1, 4); // e.g., returns "ell"
        break;
      case "substr":
        output = str.substr(1, 3); // e.g., returns "ell"
        break;
    }
  
    result.innerHTML = `Result: ${output}`;
  }