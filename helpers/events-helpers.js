export function generateCategories(arr, slug, isActive) {
  try {
    if (Array.isArray(arr)) {
      if (isActive) {
        return arr.filter(item => item !== slug);
      }
      return [...arr, slug].filter(i => i && i.length > 0);
    }
    if (isActive) {
      return [slug].filter(i => i !== slug);
    }
    return [arr, slug].filter(i => i && i.length > 0);
  } catch (e) {
    return null;
  }
}

export function checkActiveCategories(arr, slug) {
  try {
    if (Array.isArray(arr)) {
      return arr.includes(slug);
    }
    return arr === slug;
  } catch (e) {
    return false;
  }
}

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
