// Fonction pour extraire l'ID d'une vidéo YouTube à partir de l'URL
function extractVideoId(url) {
  const regex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|e\/|.+\/videoseries\?v%3D))([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null; // Si l'ID est trouvé, il est retourné, sinon null.
}
const url = window.location.href;

// Extraire l'ID de la vidéo
const videoId = extractVideoId(url);

// Si un ID est trouvé, envoyer un message au script d'arrière-plan
if (videoId) {
  console.log("video", videoId);
  chrome.runtime.sendMessage({ type: "VIDEO_ID", videoId });
}
