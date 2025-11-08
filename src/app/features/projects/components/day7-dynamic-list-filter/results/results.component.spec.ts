import { setupRender } from '../../../../../testing/testUtils';
import { ResultsComponent } from './results.component';

const MOCK_RESULTS = [
  'course 1',
  'course 2',
  'course 3',
  'course 4',
  'course 5',
];

const componentProperties = {
  results: MOCK_RESULTS,
};

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
    it('should display the provided results properly', async () => {
      const { queryAllByRole, queryByText } = await setupRender(
        ResultsComponent,
        { componentProperties }
      );

      expect(queryAllByRole('listitem')).toHaveLength(MOCK_RESULTS.length);
      expect(queryByText(MOCK_RESULTS[0])).toBeInTheDocument();
      expect(queryByText(MOCK_RESULTS[1])).toBeInTheDocument();
      expect(queryByText(MOCK_RESULTS[2])).toBeInTheDocument();
      expect(queryByText(MOCK_RESULTS[3])).toBeInTheDocument();
      expect(queryByText(MOCK_RESULTS[4])).toBeInTheDocument();
    });
  });
});
