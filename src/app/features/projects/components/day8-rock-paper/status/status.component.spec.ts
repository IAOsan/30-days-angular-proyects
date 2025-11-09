import { setupRender } from '../../../../../testing/testUtils';
import { StatusComponent } from './status.component';

describe('<RockPaperScissorsStatus />', () => {
  describe('Layout', () => {
    it('should not display the player selection if there is no choice', async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {},
      });

      expect(queryByText(/^You choose.*/i)).not.toBeInTheDocument();
    });
    it('should not display the cpu selection if there is no choice', async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {},
      });

      expect(queryByText(/^Computer choose.*/i)).not.toBeInTheDocument();
    });
    it('should not display any message if the player and cpu have no choice and status is equal to idle', async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {
          status: 'idle',
        },
      });

      expect(queryByText(/^you lose.*/i)).not.toBeInTheDocument();
      expect(queryByText(/^you win.*/i)).not.toBeInTheDocument();
      expect(queryByText(/^draw.*/i)).not.toBeInTheDocument();
    });
    it('should display a message when playerChoice has a value', async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {
          playerChoice: 'rock',
        },
      });

      expect(queryByText(/^You choose.*/)).toHaveTextContent('You choose ROCK');
    });
    it('should display a message when cpuChoice has a value', async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {
          cpuChoice: 'paper',
        },
      });

      expect(queryByText(/^Computer choose.*/)).toHaveTextContent(
        'Computer choose PAPER'
      );
    });
  });
});
