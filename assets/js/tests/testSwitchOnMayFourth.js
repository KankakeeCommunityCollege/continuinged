import test from 'node:test';
import assert from 'node:assert';
import switchOnMayFourth from '../src/switchOnMayFourth.js';

test('May 4th Activation Logic with Fallback', async (t) => {

  await t.test('should execute FALLBACK on May 3rd at 11:59:59 PM Chicago time', () => {
    const lateMayThird = new Date('2026-05-04T04:59:59Z');
    let callbackCalled = false;
    let fallbackCalled = false;
    
    switchOnMayFourth(
      () => { callbackCalled = true; }, 
      () => { fallbackCalled = true; }, 
      lateMayThird
    );
    
    assert.strictEqual(callbackCalled, false, 'Callback should NOT fire on May 3rd');
    assert.strictEqual(fallbackCalled, true, 'Fallback SHOULD fire on May 3rd');
  });

  await t.test('should execute CALLBACK exactly at midnight on May 4th Chicago time', () => {
    const midnightMayFourth = new Date('2026-05-04T05:00:00Z');
    let callbackCalled = false;
    let fallbackCalled = false;

    switchOnMayFourth(
      () => { callbackCalled = true; }, 
      () => { fallbackCalled = true; }, 
      midnightMayFourth
    );

    assert.strictEqual(callbackCalled, true, 'Callback SHOULD fire at midnight May 4th');
    assert.strictEqual(fallbackCalled, false, 'Fallback should NOT fire at midnight May 4th');
  });

  await t.test('should execute CALLBACK later in the day on May 4th', () => {
    const noonMayFourth = new Date('2026-05-04T17:00:00Z');
    let callbackCalled = false;
    let fallbackCalled = false;

    switchOnMayFourth(
      () => { callbackCalled = true; }, 
      () => { fallbackCalled = true; }, 
      noonMayFourth
    );

    assert.strictEqual(callbackCalled, true, 'Callback SHOULD fire during the day on May 4th');
    assert.strictEqual(fallbackCalled, false, 'Fallback should NOT fire');
  });

  await t.test('should execute CALLBACK after May 4th', () => {
    const noonMayFifth = new Date('2026-05-05T17:00:00Z');
    let callbackCalled = false;
    let fallbackCalled = false;

    switchOnMayFourth(
      () => { callbackCalled = true; }, 
      () => { fallbackCalled = true; }, 
      noonMayFifth
    );

    assert.strictEqual(callbackCalled, true, 'Callback SHOULD fire after May 4th');
    assert.strictEqual(fallbackCalled, false, 'Fallback should NOT fire');
  });

  await t.test('should execute CALLBACK in months after May', () => {
    const noonJuneSeventh = new Date('2026-06-07T17:00:00Z');
    let callbackCalled = false;
    let fallbackCalled = false;

    switchOnMayFourth(
      () => { callbackCalled = true; }, 
      () => { fallbackCalled = true; }, 
      noonJuneSeventh
    );

    assert.strictEqual(callbackCalled, true, 'Callback SHOULD fire in June');
    assert.strictEqual(fallbackCalled, false, 'Fallback should NOT fire');
  });

  await t.test('should execute CALLBACK in years after 2026', () => {
    const nextYear = new Date('2027-01-01T12:00:00Z');
    let callbackCalled = false;
    let fallbackCalled = false;

    switchOnMayFourth(
      () => { callbackCalled = true; }, 
      () => { fallbackCalled = true; }, 
      nextYear
    );

    assert.strictEqual(callbackCalled, true, 'Callback SHOULD fire in 2027');
    assert.strictEqual(fallbackCalled, false, 'Fallback should NOT fire');
  });
});
