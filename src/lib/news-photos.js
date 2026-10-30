/** Single photo collection shared by the News carousel and Gallery Archive. */
export const MAX_RECENT_PHOTOS = 9;

/**
 * Photos are listed newest-first in src/content/news.js.
 * Only photos with both an image and caption are shown.
 */
export function getNewsPhotos(gallery = {}) {
  return (gallery?.photos ?? []).filter((photo) => photo?.src && photo?.caption);
}

export function getRecentPhotos(gallery = {}) {
  return getNewsPhotos(gallery).slice(0, MAX_RECENT_PHOTOS);
}

export function getArchivedPhotos(gallery = {}) {
  return getNewsPhotos(gallery).slice(MAX_RECENT_PHOTOS);
}
