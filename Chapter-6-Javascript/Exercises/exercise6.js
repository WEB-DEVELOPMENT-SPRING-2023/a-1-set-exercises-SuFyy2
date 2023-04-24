//after the calculate button is clicked the calculation which we programe through the javascript is done
function Calculation(){
    Amount=parseFloat(form.Amount.value);//"Amount" is tagged for the 1st field which asks the user for cost of petrol per litre
    Litre=parseFloat(form.Litre.value);//then "litre" which is the field that ask the user for how much litre he/she has purchased
    Total=Amount*Litre;//then both "amount" and "litre" is multiplied to get the total cost for the litres he purchased.
    form.Total.value=Total;//then that value is printed in our final field. 
}