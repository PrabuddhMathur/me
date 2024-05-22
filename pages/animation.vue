<template>
    <div class="flex items-center justify-center h-screen">
      <h1 class="text-4xl font-bold text-gray-800" id="typing-text">Hello</h1>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.type();
    },
    methods: {
      type() {
        const phrases = ["Hello, World!", "Welcome to Tailwind Typing Animation", "Have a great day!"];
        let index = 0;
  
        const typeInterval = setInterval(() => {
          const text = phrases[index];
          const typingText = document.getElementById('typing-text');
          typingText.textContent = text.substring(0, typingText.textContent.length + 1);
  
          if (typingText.textContent === text) {
            clearInterval(typeInterval);
            setTimeout(this.erase, 1000); // wait for 1 second before erasing
          }
        }, 100); // typing speed
      },
      erase() {
        const phrases = ["Hello, World!", "Welcome to Tailwind Typing Animation", "Have a great day!"];
        let index = 0;
  
        const eraseInterval = setInterval(() => {
          const text = phrases[index];
          const typingText = document.getElementById('typing-text');
          typingText.textContent = text.substring(0, typingText.textContent.length - 1);
  
          if (typingText.textContent === "") {
            clearInterval(eraseInterval);
            index++;
            if (index >= phrases.length) {
              index = 0; // restart animation from the beginning
            }
            setTimeout(this.type, 500); // wait for 0.5 second before typing next phrase
          }
        }, 50); // erasing speed
      }
    }
  }
  </script>
  
  <style scoped>
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: black; }
  }
  
  #typing-text::after {
    content: '|';
    animation: blink-caret 0.75s infinite;
  }
  </style>
  