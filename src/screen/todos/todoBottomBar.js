/* eslint-disable react/prop-types */
import React, { memo } from 'react';

export default memo(({ changeDisplayType }) => (
  <div>
    <button type="button" onClick={() => changeDisplayType('all')}>
      All
    </button>
    <button type="button" onClick={() => changeDisplayType('pending')}>
      Pending
    </button>
    <button type="button" onClick={() => changeDisplayType('completed')}>
      Completed
    </button>
  </div>
));
