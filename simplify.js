

let oddevenA;
let oddevenB;

/*function simplify(a,b) {
    let num = a;
    let den = b;


if(Number.isInteger((a/b))===true){
    return a/b
}else if(num%den!==1){
        num = a/(a%b)
        den = b/(a%b)
      if(den<0){
          num = num * -1
          den = den * -1
      }
        return num + '/' + den;
    } else return a+'/'+b



}*/

function simplify(numerator,denominator){
    var pgdc = function pgdc(a,b){
        return b ? pgdc(b, a%b) : a;
    };
    pgdc = pgdc(numerator,denominator);
    if(denominator/pgdc===1){
        return numerator/pgdc
    }
    if((denominator/pgdc)<0){
        return -1*(numerator/pgdc) + '/' + -1*(denominator/pgdc)
    }
    return numerator/pgdc +'/'+ denominator/pgdc;
}