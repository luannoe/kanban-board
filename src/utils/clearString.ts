export const clearString = (value: string) =>
  value
    .normalize('NFD') // Normaliza a string no formato NFD
    .replace(/[\u0300-\u036f]/g, '') // Remove acentuação
    .toLowerCase()
