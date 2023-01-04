import { render } from '@testing-library/react';

import SstDemoLibrary from './sst-demo-library';

describe('SstDemoLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SstDemoLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
