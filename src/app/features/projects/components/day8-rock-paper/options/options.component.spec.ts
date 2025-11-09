import { setupRender } from '../../../../../testing/testUtils';
import { OptionsComponent } from './options.component';

describe('<RockPaperScissor />', () => {
  describe('Layout', () => {
    it('should display the options with proper attributes', async () => {
      const { queryAllByRole } = await setupRender(OptionsComponent);

      const options = queryAllByRole('button');

      expect(options).toHaveLength(3);
      expect(options[0]).toHaveAttribute('title', 'Rock');
      expect(options[0]).toHaveAttribute('aria-label', 'Select rock');
      expect(options[1]).toHaveAttribute('title', 'Paper');
      expect(options[1]).toHaveAttribute('aria-label', 'Select paper');
      expect(options[2]).toHaveAttribute('title', 'Scissors');
      expect(options[2]).toHaveAttribute('aria-label', 'Select scissors');
    });
  });
});
