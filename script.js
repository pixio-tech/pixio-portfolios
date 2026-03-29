const whatsappNumber = "919999999999";

const whatsappButtons = document.querySelectorAll(".js-whatsapp-btn");

whatsappButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".portfolio-card");

    if (!card) {
      return;
    }

    const { project, category, budget } = card.dataset;
    const message = `Hello, I would like to enquire about "${project}" in the ${category} category. My budget is ${budget}. Please share more details.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
});
