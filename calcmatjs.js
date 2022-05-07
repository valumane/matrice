let ListInput = document.getElementsByTagName("input");
function RdmInt(max) {
    return Math.floor(Math.random() * max);
}


function coo(x,y,m){
    let input;
    switch (m){
        case 'a' : switch (x){
            case 0 : switch (y){
                case 0 : input = ListInput[15];break;
                case 1 : input = ListInput[12];break;
                case 2 : input = ListInput[9];break;
            }
            return input
            case 1 : switch (y){
                case 0 : input = ListInput[16];break;
                case 1 : input = ListInput[13];break;
                case 2 : input = ListInput[10];break;
            }
            return input
            case 2 : switch (y){
                case 0 : input = ListInput[17];break;
                case 1 : input = ListInput[14];break;
                case 2 : input = ListInput[11];break;
            }
            return input
        }
        return input

        case 'b' : switch (x){
            case 0 : switch (y){
                case 0 : input = ListInput[6];break;
                case 1 : input = ListInput[3];break;
                case 2 : input = ListInput[0];break;
            }
                return input
            case 1 : switch (y){
                case 0 : input = ListInput[7];break;
                case 1 : input = ListInput[4];break;
                case 2 : input = ListInput[1];break;
            }
                return input
            case 2 : switch (y){
                case 0 : input = ListInput[8];break;
                case 1 : input = ListInput[5];break;
                case 2 : input = ListInput[2];break;
            }
                return input
        }
            return input

        case 'r' : switch (x){
            case 0 : switch (y){
                case 0 : input = ListInput[24];break;
                case 1 : input = ListInput[21];break;
                case 2 : input = ListInput[18];break;
            }
                return input
            case 1 : switch (y){
                case 0 : input = ListInput[25];break;
                case 1 : input = ListInput[22];break;
                case 2 : input = ListInput[19];break;
            }
                return input
            case 2 : switch (y){
                case 0 : input = ListInput[26];break;
                case 1 : input = ListInput[23];break;
                case 2 : input = ListInput[20];break;
            }
                return input
        }
    }
}


function erase(m){

    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++){
            coo(i,y,m).value=""
        }
    }
}

function aleatory(m){
    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++){
            coo(i,y,m).value=RdmInt(10)
        }
    }
}

function AddOrMinus(c){
    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++){

            coo(i,y,'r').value = eval(coo(i,y,'a').value + c +coo(i,y,'b').value)


        }
    }
}
