export default function removeTopPageStreams() {
  const pathname = location.pathname;
  if (pathname === "/") {
    document.body
      .querySelector('div[data-a-target="front-page-carousel"]')
      ?.remove();
  }
  console.log("removeTopPageStreams");
}
