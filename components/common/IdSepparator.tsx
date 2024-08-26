export function getLastWord(input: string): string {
    const parts = input.split('_');
    return parts[parts.length - 1];
  }