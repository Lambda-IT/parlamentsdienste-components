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

    return null;

    function isStringOrNumber(val: unknown): val is string | number {
        return (typeof val === 'string' && val !== '') || typeof val === 'number';
    }

    function IsObjectWithId(val: unknown): val is { id: string | number } {
        return typeof val === 'object' && val !== null && 'id' in val && isStringOrNumber(val.id);
    }
}
