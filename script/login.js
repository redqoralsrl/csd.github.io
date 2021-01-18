const id = document.querySelector('#id');
const pw = document.querySelector('#pw');

$('#sub').click(function(){
    console.log(localStorage.getItem(id.value));
    console.log(String(pw.value));
    if(localStorage.getItem(id.value)===String(pw.value)){
            document.location.href='../exhhi.html';
    }else{
        alert('오류!');
    }
})

