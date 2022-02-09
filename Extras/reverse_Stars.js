//=====REVERSE STARS=====

let rows = 5

for(i = 5; i >= 1 && i <= rows; i--){
    var stars ="";
    for(j=1; j <= rows; j++){
        if(j < i){ stars+=("  ")
        } else if(j >= i){
        stars+=(" *")
}   } console.log(stars);
}

