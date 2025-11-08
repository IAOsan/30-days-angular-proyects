import { setupRender } from '../../../../../testing/testUtils';
import { HeaderComponent } from './header.component';

describe('<DynamicListHeader />', () => {
  describe('Layout', () => {
    it('should display the header text', async () => {
      const { queryByText } = await setupRender(HeaderComponent);

      expect(queryByText('Dynamic List Filter')).toBeInTheDocument();
    });
  });
});
