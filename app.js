// product Load More!
const productLM = document.getElementById('productLoadMore');
let currentItem = 3;

productLM.addEventListener('click', ()=>{
    const productList = [...document.querySelectorAll('.album .container .col')];
    for(let i=currentItem; i<currentItem+3; i++){
        if( productList[i]) {
            productList[i].style.display = 'block';
        }
    }
    currentItem += 3;
})

// 뉴스 스크롤 시 load more

