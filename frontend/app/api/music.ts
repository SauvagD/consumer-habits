import axios from "axios";
import { BACKEND_URL } from "config";

export async function getContent() {
  return await axios.get(`${BACKEND_URL}/content`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzNTQzMjc3fQ.sj36s6QG7AyJyPvlggkr8S6BcqV84tL2_C9-l9elgZI`,
    },
  });
}
