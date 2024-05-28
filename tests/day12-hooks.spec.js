import { test, expect } from '@playwright/test';


test.describe('Describe block', () => {

    test.beforeAll('beforeAll inside describe block', () => console.log('beforeAll inside describe block'));

    test('Test 1 in describe block', () => console.log('Test 1 inside describe block'));
    test('Test 2 in describe block', () => console.log('Test 2 inside describe block'));

    test.afterAll('afterAll inside describe block', () => console.log('afterAll inside describe block'));
})
test.beforeAll('beforeAll outside describe block', () => console.log('beforeAll outside describe block'));

test.beforeEach('beforeEach outside describe block', () => console.log('beforeEach outside describe block'));

test('Test 1 outside describe block', () => console.log('Test 1 outside describe block'));
test('Test 2 outside describe block', () => console.log('Test 2 outside describe block'));
test('Test 3 outside describe block', () => console.log('Test 3 outside describe block'));

test.afterEach('afterEach outside describe block', () => console.log('afterEach outside describe block'));

test.afterAll('afterAll outside describe block', () => { console.log('afterAll outside describe block') });