import { setupRender } from '../../../../../testing/testUtils';
import { ScoreComponent } from './score.component';

const componentProperties = {
  playerScore: 10,
  cpuScore: 20,
};

describe('<RockPaperScissorsScore />', () => {
  describe('Layout', () => {
    it('should display the playScore properly', async () => {
      const { queryByText } = await setupRender(ScoreComponent, {
        componentProperties,
      });

      expect(queryByText(/^You.*/)).toHaveTextContent('You: 10');
    });
    it('should display the cpuScore properly', async () => {
      const { queryByText } = await setupRender(ScoreComponent, {
        componentProperties,
      });

      expect(queryByText(/^Computer.*/)).toHaveTextContent('Computer: 20');
    });
  });
});
