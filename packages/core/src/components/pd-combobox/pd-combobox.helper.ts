/**
 * Extracts an array of string IDs from the `selected` prop for the combobox component.
 *
 * Accepts a value that can be:
 * - a string or number (single selection)
 * - an object with an `id` property (single selection)
 * - an array of strings, numbers, or objects with an `id` property (multi-selection)
 *
 * If `multiselect` is false and multiple IDs are found, only the first is returned and a warning is logged.
 * If the input is invalid, logs an error and returns null.
 *
 * @param newSelected - The value of the selected prop (string, number, object with id, or array of these)
 * @param multiselect - Whether multiple selections are allowed
 * @returns An array of string IDs, or null if input is invalid
 */
export function getIdsfromSelectedProp(newSelected: unknown, multiselect: boolean): string[] | null {
    if (!newSelected) return null;

    const ids = (function () {
        if (isStringOrNumber(newSelected)) {
            return [newSelected.toString()];
        }

        if (Array.isArray(newSelected)) {
            if (newSelected.every(item => isStringOrNumber(item))) {
                return newSelected.map(item => item.toString());
            }
            if (newSelected.every(item => IsObjectWithId(item))) {
                return newSelected.map(item => item.id.toString());
            }
        }

        if (IsObjectWithId(newSelected)) {
            return [newSelected.id.toString()];
        }

        return null;
    })();

    if (!ids || ids.length === 0) {
        console.error(
            'pd-combobox: Invalid selected prop type. Expected string, number or object with id property or an Array of those types when multiselect is enabled.',
        );
        return null;
    }

    if (multiselect) {
        return ids;
    }

    if (ids.length > 1) {
        console.warn(
            'pd-combobox: Trying to select multiple items when multiselect is not enabled. Using the first item.',
        );
        return [ids[0]];
    }

    if (ids.length === 1) {
        return ids;
    }

    return null;

    function isStringOrNumber(val: unknown): val is string | number {
        return (typeof val === 'string' && val !== '') || typeof val === 'number';
    }

    function IsObjectWithId(val: unknown): val is { id: string | number } {
        return typeof val === 'object' && val !== null && 'id' in val && isStringOrNumber(val.id);
    }
}
