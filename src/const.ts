export const RATINGS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
] as const;

export const MIN_COMMENT_LENGTH = 50;

export const MAX_NEARBY_OFFERS = 3;


export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_ACTIVE = 'img/pin-active.svg';

export const MARKER_SIZES = {
  width: 27,
  height: 39,
  anchorX: 13,
  anchorY: 39
} as const;
