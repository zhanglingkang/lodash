export default function concat(array: any[], ...values: any[]) {

    let result = [
        ...(array || [])
    ]
    for (let i = 0; i < values.length; ++i) {
        if (Array.isArray(values[i])) {
            result.push(...values[i])
        } else {
            result.push(values[i])
        }
    }
    return result;
}