/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const amount = '6';
export default function stringToNumber(amount) {
  const amountToNumber = Number(amount);
  if (isNaN(amountToNumber)) throw new Error('tgyhi');
  return amountToNumber;
}
