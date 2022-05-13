import apiClient from "./http-common";
import config from "./config";

export const getVideo = async ({ queryKey }) => {
  const [_, url] = queryKey;
  const res = await apiClient.get(url, {
    params: {
      key: config.YOUTUBE_API_KEY,
      maxResults: 50,
    },
  });

  return res;
};
