// Fonction pour extraire l'ID d'une vidéo YouTube à partir de l'URL
function extractVideoId(url) {
  const regex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|e\/|.+\/videoseries\?v%3D))([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null; // Si l'ID est trouvé, il est retourné, sinon null.
}

const prod = "https://consumer-habits-production.up.railway.app";

// Fonction pour envoyer l'ID de la vidéo au backend
function sendVideoIdToBackend(videoId) {
  fetch(`${prod}/content`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzMzUxNjU3fQ.A9wmjPRBA6a0HJgBrOe6OL87jbxNQ18VeHoQ-bcvctY`,
    },
    body: JSON.stringify({
      resourceId: videoId,
      origin: "youtube",
    }),
  });
}

// Écouter les messages du script de contenu
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "VIDEO_ID" && message.videoId) {
    sendVideoIdToBackend(message.videoId);
  }
});

let tabId = "";

// Écoute les mises à jour des onglets
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch") && changeInfo.url) {
    console.log("Nouvelle URL détectée :", changeInfo.url);
    tabId = tabId;
    const videoId = extractVideoId(tab.url);
    sendVideoIdToBackend(videoId);
  }
});

/* J'ai envie de faire d'envoyer au backend  */
