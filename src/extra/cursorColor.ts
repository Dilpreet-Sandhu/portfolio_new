//@ts-nocheck
export function getPixelColor(x,y) {

    const element = document.elementFromPoint(x,y);

    if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;

        return bgColor;
    }

    return `rgb(0,255,0)`;

}


export function invertColor(rgb) {

    const rgbValues = rgb.match(/\d+/g).map(Number);

    return `rgb(${255 - rgbValues[0]},${255 - rgbValues[1]},${255 - rgbValues[2]})`;

}