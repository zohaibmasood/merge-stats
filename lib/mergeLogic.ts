export const cleanTrackName = (name: string) => {
  return name.replace(/\s*(\(|\[).*?(Remaster|Deluxe|Expanded|Top Shelf).*?(\)|\])\s*/gi, '').trim();
};