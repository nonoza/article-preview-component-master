

document.getElementById('btn').addEventListener('click', function(e) {
    e.preventDefault();
    let socialBtn = document.querySelector(".message");
    if (socialBtn.style.display === "none") {
        socialBtn.style.display = "block";
      } else {
        socialBtn.style.display = "none";
      }
})
//function in sharing on facebook
document.getElementById('facebook-share').addEventListener('click', function() {
    const navUrlFacebook = 'https://www.facebook.com/sharer/sharer.php?u=';
    window.open(navUrl , '_blank');
})
//function in sharing on twitter
document.getElementById('twitter-share').addEventListener('click', function() {
    const navUrlTwitter = 'https://twitter.com/intent/tweet?text=';
    window.open(navUrlTwitter , '_blank');
})
//function in sharing on pinerest
document.getElementById('facebook-share').addEventListener('click', function() {
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
    window.open(navUrl , '_blank');
})
