import { Equipment } from '@balalalka/types';

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(price);
};

export const calculateTotalPrice = (
  pricePerDay: number,
  days: number
): number => {
  return pricePerDay * days;
};

export const filterEquipment = (
  equipment: Equipment[],
  category?: string
): Equipment[] => {
  if (!category) return equipment;
  return equipment.filter(item => item.category === category);
};