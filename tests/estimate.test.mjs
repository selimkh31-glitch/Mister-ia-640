import test from 'node:test';
import assert from 'node:assert/strict';
import { estimate } from '../lib/estimate.ts';
test('default example: capacity, not promised revenue',()=>assert.deepEqual(estimate(8,30,35),{monthlyHours:9.6,capacityValue:336}));
test('negative, non-finite and capped inputs',()=>{
  assert.deepEqual(estimate(-1,NaN,Infinity),{monthlyHours:0,capacityValue:0});
  assert.deepEqual(estimate(100,100,200),{monthlyHours:224,capacityValue:33600});
});
