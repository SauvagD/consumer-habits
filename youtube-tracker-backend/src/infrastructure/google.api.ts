import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class GoogleApi {
  private readonly apiKey = process.env.YOUTUBE_API_KEY;
  private readonly apiUrl = 'https://www.googleapis.com/youtube/v3';

  async getVideoDetails(videoId: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/videos`, {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: videoId,
          key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching video details:', error);
      throw error;
    }
  }

  async searchVideos(query: string, maxResults = 5) {
    try {
      const response = await axios.get(`${this.apiUrl}/search`, {
        params: {
          part: 'snippet',
          q: query,
          maxResults,
          key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching videos:', error);
      throw error;
    }
  }

  async getChannelDetails(channelId: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/channels`, {
        params: {
          part: 'snippet,statistics',
          id: channelId,
          key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching channel details:', error);
      throw error;
    }
  }
}
