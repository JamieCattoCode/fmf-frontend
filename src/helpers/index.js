export function formatOptions(options) {
    return options.map((option, i) => {
        return { label: option, id: i+1 }
    });
}

export const firstCharToUC = (string) => string.charAt(0).toUpperCase() + string.slice(1);