let register = new Map();
register.set(0,0);
let zaehler = 1;





function interpretation(anweisung, args){
    switch(anweisung){
        case "LOAD":
            if (register(register(args[0]) == null)){
                register.set(args[0], 0);
            }
            register.set(0, register.get(args[0]));
            zaehler++;
            break;


        case "INLOAD":
            if (register.get(args[0]) == null){
                    register.set(args[0], 0);
            }
            if(register.get(register.get(args[0])) == null){
                register.set(register.get(args[0]), 0);

            }
            register.set(0, register.get(register.get(args[0])));
            zaehler++;
             break;


        case "CLOAD":
            register.set(0, args[0]);
            zaehler++;
            break;

            case "STORE":
            register.set(args[0], register.get(0));
            zaehler++;
            break;


        case "INDSTORE":
            if (register.get(args[0]) == null){
                    register.set(args[0], 0);
            }
            if(register.get(register.get(args[0])) == null){
                register.set(register.get(args[0]), 0);

            }
            register.set(register.set(register.get(args[0])), register.get(0));
            zaehler++;
             break;




             case "ADD":
                if (register(register(args[0]) == null)){
                    register.set(args[0], 0);
                }
                register.set(0, register.get(args[0]) + register.get(0));
                zaehler++;
                break;
    

     case "CADD":
            register.set(0, register.get(0) + args[0]);
            zaehler++;
            break;



       case "INDADD":
        if (register.get(args[0]) == null){
            register.set(args[0], 0);
    }
    if(register.get(register.get(args[0])) == null){
        register.set(register.get(args[0]), 0);

    }
    register.set(0, register.get(register.get(args[0])) + register.get(0));
    zaehler++;
     break;



     case "SUB":
        if (register.get(args[0]) == null){
            register.set(args[0], 0);
        }
        register.set(0, Math.max( register.get(args[0]) - register.get(0)));
        zaehler++;
        break;


case "CSUB":
    register.set(0, Math.max(0, register.get(0) - args[0]));
    zaehler++;
    break;



case "INDSUB":
if (register.get(args[0]) == null){
    register.set(args[0], 0);
}
if(register.get(register.get(args[0])) == null){
register.set(register.get(args[0]), 0);

}
register.set(0, Math.max(0, register.get(register.get(args[0])) - register.get(0)));
zaehler++;
break;


case "DIV":
    if (register(register(args[0]) == null)){
        register.set(args[0], 0);
    }
    if(a)
    register.set(0, Math.max( register.get(args[0]) - register.get(0)));
    zaehler++;
    break;


case "CDIV":
register.set(0, Math.max(0, register.get(0) - args[0]));
zaehler++;
break;



case "INDDIV":
if (register.get(args[0]) == null){
register.set(args[0], 0);
}
if(register.get(register.get(args[0])) == null){
register.set(register.get(args[0]), 0);

}
register.set(0, Math.max(0, register.get(register.get(args[0])) - register.get(0)));
zaehler++;
break;


                




       
    }
}