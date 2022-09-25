// 메인 슬라이드 쇼
// 클릭 시 넘어감
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName('carousel-item');  
        let points = document.getElementsByClassName('point');
        console.log(slides.length, points.length)
        // 슬라이드가 다 돌면 처음부터 다시 보여주기
        if(n > slides.length) {slideIndex = 1}
        // 슬라이드 첫장에서 이전버튼 누르면 마지막 장면 보여주기
        if(n < 1) {slideIndex = slides.length}
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }
        for(i=0; i < points.length; i++){
            points[i].className = points[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        points[slideIndex-1].className += " active";
    }


// 자동으로 넘어감