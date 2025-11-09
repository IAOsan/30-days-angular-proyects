import { setupRender } from '../../../../../testing/testUtils';
import { ScoreComponent } from './score.component';

describe('<RockPaperScissorsScore />', () => {
  describe('Layout', () => {
    it('should display the cpu score', async () => {
      const { queryByText } = await setupRender(ScoreComponent);

      const $paragraph = queryByText(/^Computer.*/);
      expect($paragraph?.textContent).toEqual('Computer: 0');
    });
    it('should display the player score', async () => {
      const { queryByText } = await setupRender(ScoreComponent);
      
      const $paragraph = queryByText(/^You.*/);
      expect($paragraph?.textContent).toEqual('You: 0');
    });
  });
});
