// Utility function to get the display name of an enum value
export function getEnumDisplayName<T extends object>(enumObj: T, value: number): string {
    if (value == null) return 'Unknown';

    // Log the value and enum object for debugging
    console.debug('getEnumDisplayName - value:', value, 'enumObj:', enumObj);

    // Find the key corresponding to the value
    const enumKey = Object.keys(enumObj).find(key => enumObj[key as keyof T] === value);

    // Format the enum key to add spaces to camelCase
    const formattedKey = enumKey ? enumKey.replace(/([a-z])([A-Z])/g, '$1 $2') : 'Unknown';

    // Log the result of the key lookup
    console.debug('getEnumDisplayName - formattedKey:', formattedKey);

    return formattedKey;
}