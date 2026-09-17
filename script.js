const modal = document.querySelector("#prompt-modal");
const promptOutput = document.querySelector("#prompt-output");

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    promptOutput.value = button.dataset.prompt;
    modal.hidden = false;
    promptOutput.focus();
  });
});

document.querySelector(".modal-close").addEventListener("click", () => {
  modal.hidden = true;
});

document.querySelector("#copy-prompt").addEventListener("click", async (event) => {
  await navigator.clipboard.writeText(promptOutput.value);
  event.currentTarget.textContent = "Скопійовано ✓";
  setTimeout(() => { event.currentTarget.textContent = "Скопіювати промт"; }, 1600);
});

document.querySelector("#signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-message").textContent = "Демо-режим: підключіть Google OAuth та бекенд реєстрації перед запуском.";
});

document.querySelector("#copy-referral").addEventListener("click", async (event) => {
  await navigator.clipboard.writeText("https://nenlay.ai/?ref=YOUR_CODE");
  event.currentTarget.textContent = "Скопійовано ✓";
});
