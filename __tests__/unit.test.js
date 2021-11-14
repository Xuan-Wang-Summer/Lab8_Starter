// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone Numer One', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('Phone Numer Two', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});
test('Phone Numer Three', () => {
    expect(functions.isPhoneNumber('1234')).toBe(false);
});
test('Phone Numer Four', () => {
    expect(functions.isPhoneNumber('hhhh')).toBe(false);
});
test('Email One', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});
test('Email Two', () => {
    expect(functions.isEmail('hello@ucsd.edu')).toBe(true);
});
test('Email Three', () => {
    expect(functions.isEmail('@ucsd.edu')).toBe(false);
});
test('Email Four', () => {
    expect(functions.isEmail('hello')).toBe(false);
});
test('Strong Password One', () => {
    expect(functions.isStrongPassword('ABCD_1234')).toBe(true);
});
test('Strong Password Two', () => {
    expect(functions.isStrongPassword('abdc01234')).toBe(true);
});
test('Strong Password Three', () => {
    expect(functions.isStrongPassword('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});
test('Strong Password Four', () => {
    expect(functions.isStrongPassword('!@#$$%%^&')).toBe(false);
});
test('Date One' , () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});
test('Date Two' , () => {
    expect(functions.isDate('1/1/2021')).toBe(true);
});
test('Date Three' , () => {
    expect(functions.isDate('1/1/201')).toBe(false);
});
test('Date Four' , () => {
    expect(functions.isDate('ggg')).toBe(false);
});
test('Color One' , () => {
    expect(functions.isHexColor('#edb4a2')).toBe(true);
});
test('Color Two' , () => {
    expect(functions.isHexColor('#90b')).toBe(true);
});
test('Color Three' , () => {
    expect(functions.isHexColor('sdds')).toBe(false);
});
test('Color Four' , () => {
    expect(functions.isHexColor('byebye')).toBe(false);
});