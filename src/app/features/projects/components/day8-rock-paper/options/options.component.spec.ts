import { setupRender, setupUser } from '../../../../../testing/testUtils';
import { MoveOption } from '../rockPaper.component';
import { OptionsComponent } from './options.component';

const user = setupUser();
const moves: MoveOption[] = [
  { id: 0, name: 'rock', label: '✊', losesTo: 'paper' },
  { id: 1, name: 'paper', label: '✋', losesTo: 'scissors' },
  { id: 2, name: 'scissors', label: '✌️', losesTo: 'rock' },
];
const componentProperties = {
  moves,
  onSelect: jest.fn(),
};

describe('<RockPaperScissor />', () => {
  describe('Layout', () => {
    it('should display the options with proper attributes', async () => {
      const { queryAllByRole } = await setupRender(OptionsComponent, {
        componentProperties,
      });

      const options = queryAllByRole('button');

      expect(options).toHaveLength(3);
      expect(options[0]).toHaveAttribute('title', 'Rock');
      expect(options[0]).toHaveAttribute('aria-label', 'Select rock');
      expect(options[1]).toHaveAttribute('title', 'Paper');
      expect(options[1]).toHaveAttribute('aria-label', 'Select paper');
      expect(options[2]).toHaveAttribute('title', 'Scissors');
      expect(options[2]).toHaveAttribute('aria-label', 'Select scissors');
    });
    it('should call onSelect callback with the proper id when an option is clicked', async () => {
      const { queryAllByRole } = await setupRender(OptionsComponent, {
        componentProperties,
      });

      await user.click(queryAllByRole('button')[0]!);

      expect(componentProperties.onSelect).toHaveBeenCalled();
      expect(componentProperties.onSelect).toHaveBeenCalledWith(moves[0].id);
    });
  });
});
