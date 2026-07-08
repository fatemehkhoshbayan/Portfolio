export const RECOMMENDATION_CARD_WIDTH = 420;
export const RECOMMENDATION_CARD_GAP = 32;

export function getRecommendationOffset(activeIndex: number, maxOffset: number) {
  const step = RECOMMENDATION_CARD_WIDTH + RECOMMENDATION_CARD_GAP;
  return Math.min(activeIndex * step, maxOffset);
}

export function getRecommendationTrackWidth(count: number) {
  if (count === 0) return 0;
  return count * RECOMMENDATION_CARD_WIDTH + (count - 1) * RECOMMENDATION_CARD_GAP;
}
