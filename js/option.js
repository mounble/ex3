//获取class名为image的所有元素
var option = document.querySelectorAll('.image')
//获取class名为right的所有元素
var btn = document.getElementsByClassName('right')
window.onload = function(){
    function init2(){
        for(let j = 0;j < btn.length; j++){
            btn[j].style.backgroundImage = "url('../imgs/right"+[j+1]+".png')"
        }
    }init2()
}
function init() {
    // var i =0,j=0;
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("src", "../imgs/option"+[i+1]+".png")
        option[i].style.zIndex = option.length + i
        option[i+1].style.marginTop = 87*(i+1)+'px'
    }

} init()
function Click(id){
    option[id-1].style.zIndex = 100+id;
    option[id-1].style.width = '450px'
    option[id-1].style.height = '400px'
    for(i=0;i<option.length;i++){
        if(i == (id - 1)){
            continue
        }
        option[i].style.zIndex = id+i
        option[i].style.width = '400px'
        option[i].style.height = '350px'
    }
}
function Click2(id){
    if(id==1){
        window.location.href = "../html/grey1.html"
    } 
    else{
        alert("该功能暂未开放")
    }
}