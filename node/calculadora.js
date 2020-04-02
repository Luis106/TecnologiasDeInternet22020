const args = process.argv.slice(2);
cal(args);

function cal(args){
    var res;
    console.log( '+  para sumar, - para restar, x para multiplicar , div para la división');
    switch(args[1]){

        case '+':
            res = parseFloat(args[0] )+ parseFloat(args[2]);
            console.log(args[0] + args[1] + args[2] + "="+res );
        break;

        case '-':
         res = parseFloat(args[0]) - parseFloat(args[2]);
         console.log(args[0] + args[1] + args[2] + "=" + res );
         break;
         case 'div':
            res = parseFloat(args[0]) / parseFloat(args[2]);
            console.log(args[0] + args[1] + args[2] + "=" + res );
        break;
        case 'x':
        res = parseFloat(args[0]) * parseFloat(args[2]);
        console.log(args[0] + args[1] + args[2] + "=" + res );
        break;


    }
}