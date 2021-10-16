let emojiContainer = document.querySelector('.Container');

for (let i = 512; i <= 591; i++) {
  emojiContainer.innerHTML += `<div class="emoji">
  <div class="emoji-image">&#128${i};</div>
  <div class="emoji-number">128${i}</div>
</div>`;
}

for (let i = 112; i <= 142; i++) {
  emojiContainer.innerHTML += `<div class="emoji">
  <div class="emoji-image">&#128${i};</div>
  <div class="emoji-number">128${i}</div>
</div>`;
}


