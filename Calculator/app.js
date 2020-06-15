window.onload = () =>{
    let screen  = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.numbers');
    let clear = document.querySelector('.btn-red');
    let equal = document.querySelector('.btn-green');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value; // 4 => 4 + 9 = 49
            console.log(value);

        })
    })

    equal.addEventListener('click', function(){
        if(screen.value === ''){
            screen.value = "Enter value";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })


    clear.addEventListener('click', function(){
        screen.value = '';
    })
}