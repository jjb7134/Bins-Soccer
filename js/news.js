// news Load More!
const newsLM = document.getElementById('newsLoadMore');
let currentItem = 3;

newsLM.addEventListener('click', ()=>{
    // 전개연산자로 모두를 담자
    const newsList = [...document.querySelectorAll('.album .container .col')];
    for(let i=currentItem; i<currentItem+3; i++){
        if( newsList[i]) {
            newsList[i].style.display = 'block';
        }
    }
    currentItem += 3;
})


