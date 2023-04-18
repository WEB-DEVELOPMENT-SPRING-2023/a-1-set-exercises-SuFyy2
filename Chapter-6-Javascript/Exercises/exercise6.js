function Calculation(){
    Amount=parseFloat(form.Amount.value);
    Litre=parseFloat(form.Litre.value);
    Total=Amount*Litre;
    form.Total.value=Total;
}