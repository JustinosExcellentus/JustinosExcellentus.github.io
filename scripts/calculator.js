


  function StringToRevPolishNotation(string){
    str = string.replace(/\s+/g, '');
    var outStack = [];
    var opStack = [];
    var mapOp = new Map();
    mapOp.set('+', 2);
    mapOp.set('-', 2);
    mapOp.set('*', 3);
    mapOp.set('/', 3);
    
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/" ) {
            if(opStack.length == 0){
                opStack.push(str[i])
            } else {
                while(mapOp.get(opStack[opStack.length -1]) >= mapOp.get(str[i])) {
                    outStack.push(opStack[opStack.length - 1]);
                    opStack.pop();

                }
                opStack.push(str[i]);
            }

        } else {
            outStack.push(str[i]);
        }
  }

  while(opStack.length > 0) {
    outStack.push(opStack[opStack.length - 1]);
    opStack.pop();

}

let res = outStack.join('');
return res;
}
function evaluateRevPolishNotation(str){
    evStack = [];

    for (let i = 0; i < str.length; i++) {
        if(!(str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") ) {
            evStack.push(str[i]);

        } else {
            let op1 = evStack.pop();
            let op2 = evStack.pop();
            let res = evaluate(op1, op2, str[i]);
            evStack.push(res);
        }
    }



    return evStack[0];

   

}

function evaluate(op2, op1, op){
    console.log(op1 + " " + op + " " + op2);
    console.log(parseFloat(op1) + " " + op + " " + parseFloat(op2));
    switch (op) {
        case '+':
         return parseFloat(op1) +  parseFloat(op2);
         
        case '-':
          
            return parseFloat(op1) -  parseFloat(op2);
        case '*':
            return parseFloat(op1) *  parseFloat(op2);
         
         

          case '/':
            if(parseFloat(op2) != 0){
                return parseFloat(op1) +  parseFloat(op2);
            } else {
                alert("Nicht durch 0 teilen!");
            }
           
            
        default:
          console.log(`Probleme`);
      }


}


function calculateExpression(expression){
    let revPolNot = StringToRevPolishNotation(expression);
    return evaluateRevPolishNotation(revPolNot);
}

console.log(calculateExpression("10+2*3-4"));