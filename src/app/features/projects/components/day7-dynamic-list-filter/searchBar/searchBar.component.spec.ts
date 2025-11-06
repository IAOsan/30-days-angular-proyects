import { screen, setupRender } from '../../../../../testing/testUtils';
import { SearchBarComponent } from './searchBar.component';

const $searchbarInput = () => screen.queryByRole('textbox');

describe('<DynamicListSearchBar />', () => {
  describe('Layout', () => {
    it('should display the searchbar', async () => {
      await setupRender(SearchBarComponent);

      expect($searchbarInput()).toBeInTheDocument();
    });
    it('should have the correct attributes', async () => {
      await setupRender(SearchBarComponent);

      expect($searchbarInput()).toHaveAttribute('type', 'text');
      expect($searchbarInput()).toHaveAttribute(
        'placeholder',
        'Search tutorials...'
      );
    });
  });
});
