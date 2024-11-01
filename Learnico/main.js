"use strict";
/// кнопка удоления ДИВа
const award = document.querySelector(".award_img");

award.addEventListener("click", () => {
    document.querySelector(".award").remove();
});


/// Кнопка воспроизведения видео

const btnClickVideo = document.getElementById("content_btn2");

const video = document.getElementById("content_watch");
function openVideo(){
    video.play();
}

btnClickVideo.addEventListener("click", () => {
    openVideo();
});