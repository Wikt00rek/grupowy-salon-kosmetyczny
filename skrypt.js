function obliczCeneZabiegow(){
    const checkboxes=
    document.querySelectorAll('.zabieg');
    let calkowitaCena=0;
    checkboxes.forEach(function(checkbox){
        if (checkbox.checked){
            calkowitaCena +=
            parseFloat(checkbox.getAttribute('data-cena'));
        }
});
document.getElementById('calkowitaCena').innerText = 'Calkowita cena : '+ calkowitaCena +' PLN';
}
document.getElementById('obliczCene').addEventListener('click',obliczCeneZabiegow);