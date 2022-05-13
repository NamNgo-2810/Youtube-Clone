import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { getVideo } from "../../api/video";
import "./RecommendedVideos.css";
import VideoCard from "../VideoCard/VideoCard";
import Loader from "../Loader/Loader";

const RecommendedVideos = ({ search }) => {
  let endpoint = "videos?part=snippet&part=statistics&chart=mostPopular";

  if (search) {
    endpoint = `search?part=snippet&q=${search}`;
  }

  const { ref, inView } = useInView();

  const { status, data, isFetching, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(["videos", endpoint], getVideo, {
      getNextPageParam: () => 5,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="recommended_videos">
      <h2>Recommended Videos</h2>

      {status === "error" ? (
        <div>Error</div>
      ) : (
        <div className="recommended_videos_videos">
          {data?.pages.map?.((page) =>
            page.data?.items?.map?.((video) => (
              <VideoCard
                video={video}
                id={(video.id.videoId && video.id.videoId) || video.id}
                key={(video.id.videoId && video.id.videoId) || video.id}
              />
            ))
          )}
        </div>
      )}
      <div ref={ref}>
        {isFetchingNextPage || isFetching ? <Loader /> : null}
      </div>
    </div>
  );
};

export default RecommendedVideos;
