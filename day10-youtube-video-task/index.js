//const player = document.getElementById("player")

function playSong(id) {
   const iframe = document.getElementById("player");
   const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1`
   iframe.src = videoUrl;
   
  // Challenge: Add code here to make the youtube player play the new YouTube song
}