export default function stopTopPageStream() {
  const pathname = location.pathname;
  if (pathname === "/") {
    console.log(document.querySelector("video[playsinline]"));
    setTimeout(() => {
      (
        document.querySelector("video[playsinline]") as HTMLVideoElement
      )?.pause();
      console.log("stopTopPageStream");
    }, 2000);
  }
}
