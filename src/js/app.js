let amount = '6';
export default function stringToNumber (amount) {
  let amountToNumber = Number(amount);
  if (isNaN(amountToNumber)) throw new Error ('tgyhi');
  return amountToNumber;
};
