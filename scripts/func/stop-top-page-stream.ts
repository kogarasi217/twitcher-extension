export default function stopTopPageStream() {
  const pathname = location.pathname;
  if (pathname === "/") {
    setTimeout(() => {
      (
        document.querySelector("video[playsinline]") as HTMLVideoElement
      )?.pause();
      console.log("stopTopPageStream");
    }, 4000);
  }
}
