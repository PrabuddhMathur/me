<template>
  <div class="flex items-center justify-center h-screen dark:bg-gray-900">
    <pre>
      <h1 class="text-5xl font-bold text-gray-800 dark:text-white font-martian-mono">Hello, Prabuddh Mathur here!</h1>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white font-martian-mono">Reach me</h1>
      <a class="text-2xl font-bold text-gray-800 dark:text-white font-martian-mono" href="https://linkedin.com/in/prabuddhmathur" target="_blank"> @Linked In</a>
      <a class="text-2xl font-bold text-gray-800 dark:text-white font-martian-mono" href="mailto:me@prabuddh.in" target="_blank"> me@prabuddh.in</a>
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white font-martian-mono">$ <span id="typing-text"></span></h2>
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phrases: ["Have a great day!", "Site under construction!"],
      index: 0
    };
  },
  mounted() {
    this.type();
  },
  methods: {
    type() {
      const text = this.phrases[this.index];
      const typingText = document.getElementById('typing-text');
      typingText.textContent = text.substring(0, typingText.textContent.length + 1);

      if (typingText.textContent === text) {
        setTimeout(this.erase, 1000); // wait for 1 second before erasing
      } else {
        setTimeout(this.type, 80); // typing speed
      }
    },
    erase() {
      const text = this.phrases[this.index];
      const typingText = document.getElementById('typing-text');
      typingText.textContent = text.substring(0, typingText.textContent.length - 1);

      if (typingText.textContent === "") {
        this.index++;
        if (this.index >= this.phrases.length) {
          this.index = 0; // restart animation from the beginning
        }
        setTimeout(this.type, 500); // wait for 0.5 second before typing next phrase
      } else {
        setTimeout(this.erase, 70); // erasing speed
      }
    }
  }
}
</script>

<style scoped>
@keyframes blink-caret {
  50% { opacity: 0; } /* Make the caret disappear at 50% */
}

#typing-text::after {
  content: '_';
  animation: blink-caret 1s infinite step-end; /* Adjust the animation */
}
</style>
