import axios from "axios";
import { BACKEND_URL } from "config";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQ0MDYwNTY5fQ.tOTFl3o45SxvVjf_ljDgy-63miWfjTkIERNlHQRwwMw";

export async function getContent() {
  return await axios.get(`${BACKEND_URL}/content`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getMusicsFromChannel(channelId: string) {
  return await axios.get(`${BACKEND_URL}/content/author/${channelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getChannels() {
  return await axios.get(`${BACKEND_URL}/content/top-channels`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
