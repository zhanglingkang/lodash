export default function chunk<T>(array: T[], size: number = 1): T[][] {

    if (array.length === 0) {
        return [[]]
    }
    if (array.length <= size) {
        return [array]
    }

    let result = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }
    return result;

}   