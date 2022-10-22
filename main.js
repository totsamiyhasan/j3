var bir = prompt('birinchi soni kiriting')
var ikki = prompt('ikkinchi soni kiriting')
var uch = prompt('uchuinchi soni kiriting')
bir = Number(bir)
ikki = Number(ikki)
uch = Number(uch)
if (bir > ikki && uch && !isNaN(bir) && !isNaN(ikki) && !isNaN(uch)) {
    alert(`${bir} katta  ${ikki} ${uch} dan`);
}else if (uch < bir && ikki && !isNaN(uch) && !isNaN(bir) && !isNaN(ikki)) {
    alert(`${uch}  kichik ${bir} ${ikki} dan`);
}else if(ikki < uch && bir && !isNaN(ikki) && !isNaN(uch) && !isNaN(bir)) 
    alert(`${ikki} kichik ${uch} ${bir} dan`);