document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".card h1, .content p, .content li, .content blockquote, .content h1, .content h2, .content h3, .content h4, .content h5, .content h6")
    .forEach(el => {
      const text = el.textContent.trim();

      if (/[\u0600-\u06FF]/.test(text)) {
        el.dir = "rtl";
        el.style.textAlign = "right";
      } else {
        el.dir = "ltr";
        el.style.textAlign = "left";
      }
    });

  document.querySelectorAll(".content pre, .content code").forEach(el => {
    el.dir = "ltr";
    el.style.textAlign = "left";
  });
});