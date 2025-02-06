export function getEnumValues(enumType: any): string[] {
 return Object.values(enumType).filter(x => isNaN(x as any)) as string[]; 
}
