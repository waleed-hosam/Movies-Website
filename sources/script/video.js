let videos = document.querySelectorAll(".videos video")
let links = document.querySelectorAll(".box a")
let active_video = document.querySelector(".videos .active")
let videoDiv = document.querySelector('.videos')
let closeBtn = document.querySelector(".fa-xmark")
links.forEach((link, i) => {
    link.onclick = () => {
        videoDiv.classList.remove("hide")
        closeBtn.classList.remove("hide")
        videos[i].classList.add("active")
        videos[i].play()
        document.querySelector("html").style.overflowY = "hidden"
    }
})
closeBtn.onclick = () => {
    videos.forEach((video) => {
        video.classList.remove("active")
        video.pause()
    })
    closeBtn.classList.add("hide")
    videoDiv.classList.add("hide")
    document.querySelector("html").style.overflowY = "auto"
}
window.addEventListener("click", e => {
    if (e.target == videoDiv && e.target != active_video) {
        videos.forEach((video) => {
            video.classList.remove("active")
            video.pause()
        })
        closeBtn.classList.add("hide")
        videoDiv.classList.add("hide")
        document.querySelector("html").style.overflowY = "auto"
    }
})
