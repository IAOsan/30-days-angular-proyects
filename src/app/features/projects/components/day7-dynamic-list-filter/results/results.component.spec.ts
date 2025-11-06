import { setupRender } from '../../../../../testing/testUtils';
import { ResultsComponent } from './results.component';

describe('<DynamicListResults />', () => {
  describe('Layout', () => {
    it('should display the results list', async () => {
      const { queryByRole } = await setupRender(ResultsComponent);

      expect(queryByRole('list')).toBeInTheDocument();
    });
    it('should not display any result item in the list', async () => {
      const { queryAllByRole } = await setupRender(ResultsComponent);

      expect(queryAllByRole('listitem')).toHaveLength(0);
    });
  });
});
