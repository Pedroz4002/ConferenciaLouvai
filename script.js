const donationPixKey = "";

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const panels = Array.from(document.querySelectorAll("[data-tab-panel]"));
const tabControls = Array.from(document.querySelectorAll("[data-tab-target]"));
const copyPixButton = document.querySelector("[data-copy-pix]");
const donationStatus = document.querySelector("[data-donation-status]");
const conferenceHashes = new Set(["inicio", "proposito", "programacao", "doacao", "perguntas", "contato"]);
const movementHashes = new Set(["movimento", "movimento-proposta", "movimento-participe"]);

function closeMenu() {
  header?.classList.remove("is-menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function activateTab(tabName, shouldScroll = true) {
  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === tabName);
  });

  tabControls.forEach((control) => {
    control.classList.toggle("is-active", control.dataset.tabTarget === tabName);
  });

  closeMenu();

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  const target = event.target.closest("a, button");

  if (target?.matches("a")) {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  const hash = anchor?.getAttribute("href")?.replace("#", "");

  if (!hash) {
    return;
  }

  if (conferenceHashes.has(hash)) {
    activateTab("conferencia", false);
  }

  if (movementHashes.has(hash)) {
    activateTab("movimento", false);
  }
});

tabControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    const tabName = event.currentTarget.dataset.tabTarget;

    if (tabName) {
      activateTab(tabName);
    }
  });
});

copyPixButton?.addEventListener("click", async () => {
  if (!donationPixKey) {
    donationStatus.textContent = "A chave PIX oficial será divulgada pela organização.";
    return;
  }

  try {
    await navigator.clipboard.writeText(donationPixKey);
    donationStatus.textContent = "Chave PIX copiada.";
  } catch {
    donationStatus.textContent = donationPixKey;
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("hashchange", () => {
  const activeHash = window.location.hash.replace("#", "");

  if (movementHashes.has(activeHash)) {
    activateTab("movimento", false);
  }

  if (activeHash === "conferencia" || conferenceHashes.has(activeHash)) {
    activateTab("conferencia", false);
  }
});

if (window.location.hash === "#movimento") {
  activateTab("movimento", false);
}

if (window.lucide) {
  window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}
