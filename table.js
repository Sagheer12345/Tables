function myTable(){

    let table = document.getElementById('table').value;

    let showResult;
    document.getElementById('ahmad').innerHTML="";
    for ( let x=1; x<=10; x++)
    {
        showResult = table + " x " + x + " = "+ table*x ;
        let result = "<h3>" + showResult + "</h3>";
        document.getElementById('ahmad').innerHTML+=result;
    }
}