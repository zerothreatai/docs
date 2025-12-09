export default defineNuxtPlugin(() => {
  if (process.server) return;

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a");
    if (!link || !link.href) return;

    const currentHost = window.location.host;
    const linkHost = new URL(link.href).host;

    // If external link → open in new tab
    if (linkHost !== currentHost) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
