const PAGE_STORAGE_KEY = 'last-page';

export function getLastPageIndex() {
    return new Promise(resolve => {
        let lastPage = sessionStorage.getItem(PAGE_STORAGE_KEY);
        lastPage = lastPage === null ? 0 : JSON.parse(lastPage);
        resolve(lastPage);
    });
}

export function savePageIndex(pageIndex) {
    return new Promise(resolve =>
        sessionStorage.setItem(PAGE_STORAGE_KEY, JSON.stringify(pageIndex)));
}