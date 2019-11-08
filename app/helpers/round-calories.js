import { helper } from '@ember/component/helper';

export default helper(function roundCalories(params/*, hash*/) {
  let newCals = Math.floor(params);
  return newCals;
});
