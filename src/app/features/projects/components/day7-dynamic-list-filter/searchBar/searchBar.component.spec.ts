import {
  screen,
  setupRender,
  setupUser,
  waitFor,
} from '../../../../../testing/testUtils';
import { SearchBarComponent } from './searchBar.component';

const $searchbar = () => screen.queryByRole('textbox');
const user = setupUser();
const componentProperties = {
  onSearch: jest.fn(),
};

describe('<DynamicListSearchBar />', () => {
  describe('Layout', () => {
    it('should display the searchbar', async () => {
      await setupRender(SearchBarComponent, {
        componentProperties,
      });

      expect($searchbar()).toBeInTheDocument();
    });
    it('should have the correct attributes', async () => {
      await setupRender(SearchBarComponent, {
        componentProperties,
      });

      expect($searchbar()).toHaveAttribute('type', 'text');
      expect($searchbar()).toHaveAttribute(
        'placeholder',
        'Search tutorials...'
      );
    });
  });
  describe('Interaction', () => {
    it('should be able to type in the searchbar', async () => {
      const expectedValue = 'hello!';
      await setupRender(SearchBarComponent, {
        componentProperties,
      });

      await user.type($searchbar()!, expectedValue);
      await waitFor(() => expect($searchbar()).toHaveValue(expectedValue));
    });
    it('should call onSearch callback when searchbar value changes', async () => {
      const expectedValue = 'hello!';
      await setupRender(SearchBarComponent, {
        componentProperties,
      });

      await user.type($searchbar()!, expectedValue);
      
      await waitFor(() =>
        expect(componentProperties.onSearch).toHaveBeenCalled()
      );
      expect(componentProperties.onSearch).toHaveBeenCalledWith(expectedValue);
    });
  });
});
