window.onload = () =>{
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip(){
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
    
    console.log(service);
    if(amount === '' && service === 'Select'){
        alert("Please enter valid values");
        return;
    }

    if(persons === '1'){
        document.querySelector('#each').style.display = 'none';
    }else{
        document.querySelector('#each').style.display = 'block';
    }

    let total = (amount * service) / persons;
    console.log(total);
    total = Math.round(total * 100)/ 100;
    total = total.toFixed(2);
    console.log(total);

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}