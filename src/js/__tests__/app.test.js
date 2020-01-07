import stringToNumber from '../app';

test ('if amount is number', () => {
    let amount = '6';
    const received = stringToNumber(amount);
    const expected = 6;
    expect(received).toBe(expected);
});

test ('if amount is not number', () => {
    let amount = 'frfrf';
    ;
    expect(()=>{
        stringToNumber(amount);
    }).toThrow(new Error ('tgyhi'));
});