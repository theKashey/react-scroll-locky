export const getGapWidth = () => {
  if(typeof window === 'undefined') {
    return 0;
  }
  const cs = window.getComputedStyle(document.body);
  const currentPadding = cs.paddingRight ? parseInt(cs.paddingRight, 10) : 0 || 0;
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  return Math.max(0, windowWidth - documentWidth + currentPadding);
};