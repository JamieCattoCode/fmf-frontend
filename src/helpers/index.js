export function formatOptions(options) {
    return options.map((option, i) => {
        return { label: option, id: i+1 }
    });
}

export const firstCharToUC = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export function convertObjectToQueryString (object) {
    let queryString = '?';
    for (const key in object) {
        queryString = queryString + `${key}=${object[key]}`;
        queryString = queryString + '&';
    }
    return queryString;
}

export function convertIndexedListToObjectList(indexedList) {
    let objectList = []
    for (const key in indexedList) {
        objectList.push(indexedList[key]);
    }
    return objectList;
}