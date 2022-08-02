/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { waitFor } from '@testing-library/react';

/**
 * Ensure the EuiPopover being tested is open/closed before contiuning
 * Note: Because EuiPopover is portalled, we want to query `document`
 * instead of the `container` returned by RTL's render()
 */
export const waitForEuiPopoverOpen = async () =>
  await waitFor(() => {
    const openPopover = document.querySelector('[data-popover-open]');
    expect(openPopover).toBeTruthy();
  });

export const waitForEuiPopoverClose = async () =>
  await waitFor(() => {
    const openPopover = document.querySelector('[data-popover-open]');
    expect(openPopover).toBeFalsy();
  });
