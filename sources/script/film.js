let videos = document.querySelectorAll(".videos video")
let links = document.querySelectorAll(".flex")
let p_links = document.querySelectorAll('.film p')
let active_video = document.querySelector(".videos .active")
let videoDiv = document.querySelector('.videos')
let closeBtn = document.querySelector(".fa-xmark")
let icon_for_play = document.querySelectorAll(".fa-play")
let movies_trailer = 27
p_links.forEach((link, i) => {
    link.onclick = () => {
        videoDiv.classList.remove("hide")
        closeBtn.classList.remove("hide")
        videos[i].classList.add("active")
        videos[i].play()
    }
})
videos.forEach((video) => {
    if (video.classList.contains("none")) {} 
    else {
        video.setAttribute("src", `Sources/videos/trailers/${movies_trailer}.mp4`)
        movies_trailer -= 1
    }
})
links.forEach((link, i) => {
    link.onclick = () => {
        videoDiv.classList.remove("hide")
        closeBtn.classList.remove("hide")
        icon_for_play.forEach((one) => {
            one.style.display = "none"
        })
        videos[i].classList.add("active")
        videos[i].play()
    }
})
closeBtn.onclick = () => {
    videos.forEach((video) => {
        video.classList.remove("active")
        video.pause()
    })
    icon_for_play.forEach((one) => {
        one.style.display = "flex"
    })
    closeBtn.classList.add("hide")
    videoDiv.classList.add("hide")
}
window.addEventListener("click", e => {
    if (e.target == videoDiv && e.target != active_video) {
        videos.forEach((video) => {
            video.classList.remove("active")
            video.pause()
        })
        icon_for_play.forEach((one) => {
            one.style.display = "flex"
        })
        closeBtn.classList.add("hide")
        videoDiv.classList.add("hide")
    }
})
