const LAST_LETTER_KEY = 'last-letter';
const LAST_LETTER_IMAGE_KEY = 'last-letter-image';

export function getLastLetterIndex() {
    return new Promise(resolve => {
        let index = sessionStorage.getItem(LAST_LETTER_KEY);
        index = index === null ? 0 : JSON.parse(index);
        resolve(index);
    });
}

export function saveLastLetterIndex(index) {
    return new Promise(() =>
        sessionStorage.setItem(LAST_LETTER_KEY, JSON.stringify(index))
    );
}

export function getLastImageIndex() {
    return new Promise(resolve => {
        let index = sessionStorage.getItem(LAST_LETTER_IMAGE_KEY);
        index = index == null ? -1 : JSON.parse(index);
        resolve(index);
    });
}

export function saveLastImageIndex(index) {
    return new Promise(() =>
        sessionStorage.setItem(LAST_LETTER_IMAGE_KEY, JSON.stringify(index))
    );
}