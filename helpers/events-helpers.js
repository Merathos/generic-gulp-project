const EVENTS_STATUS_IMAGES = {
  online: '/icons/online.png',
  streaming: '/icons/streaming.png',
  record: '/icons/recording.png',
};

export function getStatusImage(slug) {
  return EVENTS_STATUS_IMAGES[slug];
}

const EVENTS_BACKGROUND_IMAGES = {
  devops: '/backgrounds/devops.svg',
  java: '/backgrounds/java.svg',
  javascript: '/backgrounds/javascript.svg',
  qa: '/backgrounds/qa.svg',
  c: '/backgrounds/c++.svg',
};

export function getCategoryBackground(slug) {
  return EVENTS_BACKGROUND_IMAGES[slug];
}
