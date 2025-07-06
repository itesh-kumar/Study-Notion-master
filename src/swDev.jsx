
// export default function swDev() {
//   let swUrl = `${import.meta.env.VITE_PUBLIC_URL}/service-worker.js`
//   navigator.serviceWorker.register(swUrl).then((response) => {
//     console.warn('response', response)
//   })
// }
// src/swDev.js
export default function swDev() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')  // ✅ No undefined, served from public/
      .then((res) => {
        console.warn('✅ Service Worker registered:', res);
      })
      .catch((err) => {
        console.error('❌ Service Worker registration failed:', err);
      });
  }
}
