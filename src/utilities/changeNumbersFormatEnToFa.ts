type TChanger = (number: number | string) => string | number;

export const changeNumbersFormatEnToFa: TChanger = (number) =>
  number.toString().replace(/\d/g, (index) => "۰۱۲۳۴۵۶۷۸۹"[index]);
