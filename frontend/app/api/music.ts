import axios from "axios";
import { BACKEND_URL } from "config";

export async function getContent() {
  return await axios.get(`${BACKEND_URL}content`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQzMzUxNjU3fQ.A9wmjPRBA6a0HJgBrOe6OL87jbxNQ18VeHoQ-bcvctY`,
    },
  });
}
