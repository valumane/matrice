let ListInput = document.getElementsByTagName("input");


function eraseA(){
    for (let i=1; i < 10 ; i++){
        document.getElementById(i).value = ""
    }
}
function eraseB(){
    for (let i=10; i < 19 ; i++){
        document.getElementById(i).value = ""
    }
}

function eraseAll(){
    for (let i=0; i < 27 ; i++){
        ListInput[i].value = ""
    }
}

function AddMinus(car){

    for ( let i = 0 ; i <18 ; i++){

        if (ListInput[i].value === ""){
            ListInput[i].value = "0"
        }

    }

        ListInput[18].value = eval(ListInput[0].value + car + ListInput[9].value)
        ListInput[19].value = eval(ListInput[1].value + car + ListInput[10].value)
        ListInput[20].value = eval(ListInput[2].value + car + ListInput[11].value)
        ListInput[21].value = eval(ListInput[3].value + car + ListInput[12].value)
        ListInput[22].value = eval(ListInput[4].value + car + ListInput[13].value)
        ListInput[23].value = eval(ListInput[5].value + car + ListInput[14].value)
        ListInput[24].value = eval(ListInput[6].value + car + ListInput[15].value)
        ListInput[25].value = eval(ListInput[7].value + car + ListInput[16].value)
        ListInput[26].value = eval(ListInput[8].value + car + ListInput[17].value)

}


function idB(){
    ListInput[0].value = "1"
    ListInput[4].value = "1"
    ListInput[8].value = "1"
}
function idA(){
    ListInput[9].value = "1"
    ListInput[13].value = "1"
    ListInput[17].value = "1"
}