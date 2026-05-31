import {
  test,
  expect
} from '@playwright/test';

import {
  DbHelper
} from '../../utils/dbHelper';

test.describe(
'Database Validation',
() => {

test(
'@db User should exist in database',
async () => {

  const user =
    await DbHelper.getUser(
      'standard_user'
    );

  expect(user)
    .not.toBeNull();

  expect(
    user.username
  ).toBe(
    'standard_user'
  );

  expect(
    user.role
  ).toBe(
    'customer'
  );
});
});