var Z = W = 5; //количество вариантов текстов 
var S = 3; //задержка в секундах 

onload = function myFunc () 
{ 
 document.getElementById ('p' + Z).style.display = 'none'; Z = (Z == W) ? 1 : (Z + 1); 
 document.getElementById ('p' + Z).style.display = 'block'; setTimeout (myFunc, S * 1000); 
}