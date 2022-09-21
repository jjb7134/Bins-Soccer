// product Load More!
const productLM = document.getElementById('productLoadMore');
let currentItem = 3;

productLM.addEventListener('click', ()=>{
    // 전개연산자로 모두를 담자
    const productList = [...document.querySelectorAll('.album .container .col')];
    for(let i=currentItem; i<currentItem+3; i++){
        if( productList[i]) {
            productList[i].style.display = 'block';
        }
    }
    currentItem += 3;
})


