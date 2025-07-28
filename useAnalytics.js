import { useRef } from "react";

export default function useAnalytics() {
  const analyticsData = useRef({});

  const add = (url) => {
    analyticsData.current[url.id] = { ...url };
  };

  const trackClick = (id) => {
    if (analyticsData.current[id]) {
      analyticsData.current[id].clicks += 1;
      console.log("Analytics Log:", analyticsData.current[id]);
    }
  };

  return {
    analytics: {
      add,
    },
    trackClick,
  };
}