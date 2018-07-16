export const getGapWidth = () => {
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    return Math.max(0, windowWidth - documentWidth-0);
};