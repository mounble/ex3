//总页数
const PAGECOUNT = 5
//当前页面编号
let pageNo = 0
//内容页
let pages = document.querySelectorAll('.book-page')
// 封面页
let cover = document.querySelectorAll('.book-cover')
// 按钮
let btn = document.querySelectorAll('#control button')
// 
let book = document.querySelector('#book')
// 所有页
let allPages = document.querySelectorAll('.one-page')
function init() {
    
    for(let index = 0;index < pages.length;index++){
        pages[index].style.backgroundImage = "url('../imgs/pic"+ [index + 1] + ".png')"
        pages[index].style.zIndex = PAGECOUNT - index - 1
    }
    // cover[1]是尾页，优先级最低
    
    cover[0].style.zIndex = PAGECOUNT + 1
    cover[1].style.zIndex = 0
    cover[1].style.backgroundImage = "url('../imgs/5.png')"
    //默认页面为封面，左按钮无效
    btn[0].style.backgroundColor = "dimgrey"
    btn[0].style.color = "darkgrey"
    btn[0].disabled = false
    cover[1].onclick = function(){
        window.location.href = "html/four.html"
    }
    
 // 左翻页
    btn[0].onclick = function() {
        pageNo -- 
        // 如果当前是最后一页，并往前翻
        if ((PAGECOUNT - 1) == pageNo) {
            allPages[pageNo].style.transform = 'rotateY(0deg)'
            //( 240px + 50px ) * 0.5
            book.style.transform = 'translateX(145px)'
            btn[1].style.backgroundColor = "rgba(63, 63, 63, 0.8)"
            btn[1].style.color = "white"
            btn[1].disabled = false   
        }
        else {
            allPages[pageNo].style.transform = 'rotateY(0deg)'
        }
        allPages[pageNo].style.zIndex = PAGECOUNT - pageNo - 1

        if( 0 == pageNo ) {
            btn[0].style.backgroundColor = "rgba(110, 110, 110, 0.5)"
            btn[0].style.color = "darkgray"
            btn[0].disabled = true
            book.style.transform = 'translateX(0px)'
        }
    }

// 右翻页
    btn[1].onclick = function() {
        document.getElementById("text").style.display = "none"
        document.getElementById("zhaozi").style.display = "none"
        // 如果当前是第一页，并往后翻
        if ( 0 == pageNo ) {
            allPages[pageNo].style.transform = 'rotateY(-180deg)'
            //( 240px + 50px ) * 0.5
            book.style.transform = 'translateX(160px)'
            btn[0].style.backgroundColor = "rgba(63, 63, 63, 0.8)"
            btn[0].style.color = "white"
            btn[0].disabled = false   
        }
        else {
            allPages[pageNo].style.transform = 'rotateY(-180deg)'
        }

        allPages[pageNo].style.zIndex = 1000 + pageNo
        pageNo ++

        if( PAGECOUNT == pageNo ) {
            btn[1].style.backgroundColor = "rgba(110, 110, 110, 0.5)"
            btn[1].style.color = "darkgray"
            btn[1].disabled = true
        }  
    }

}
init()