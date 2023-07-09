import { sliderImages } from "./data";

const getNextImageIndex = (currentImageIndex: number, offset: any) => {
    let nextImageIndex = currentImageIndex + offset;
    if (nextImageIndex < 0) {
        nextImageIndex = sliderImages.length - 1;
    } else if (nextImageIndex >= sliderImages.length) {
        nextImageIndex = 0;
    }
    return nextImageIndex;
};

export {
    getNextImageIndex
}