import axios from "axios";
import { BACKEND_URL } from "config";

export async function getContent() {
  return await axios.get(`${BACKEND_URL}/content`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzNTQzMjc3fQ.sj36s6QG7AyJyPvlggkr8S6BcqV84tL2_C9-l9elgZI`,
    },
  });
}

export async function getMusicsFromChannel(channelId: string) {
  return await axios.get(`${BACKEND_URL}/content/author/${channelId}`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzODczNDUxfQ.kGjzeLtPY3AAkxo4T6oy8RgNkoxWvx7ReeioeJnhMcw`,
    },
  });
}

export async function getChannels() {
  return await axios.get(`${BACKEND_URL}/content/top-channels`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzODczNDUxfQ.kGjzeLtPY3AAkxo4T6oy8RgNkoxWvx7ReeioeJnhMcw`,
    },
  });
}
