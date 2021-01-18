const id = document.querySelector('#id');
const pw = document.querySelector('#pw');

$('#sub').click(function(){
    localStorage.setItem(id.value,pw.value);
    // document.write(id.value);
    // document.write(pw.value);
    alert('회원가입 완료!');
    window.location.replace('./exhibit_login.html');
});
// const a = true;
// if( $('#id') === "" || $('#pw') === "" || $('#ph') === ""){
//     a = false;
// }
// function login_go(){
//     if (a === true){
//         localStorage.setItem(id,pw);

//         alert('회원가입완료')
//     }else{
//         alert('회원가입실패')
//     }
// }