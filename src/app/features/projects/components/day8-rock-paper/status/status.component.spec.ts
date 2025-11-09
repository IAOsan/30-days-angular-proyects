import { setupRender } from '../../../../../testing/testUtils';
import { StatusComponent } from './status.component';

describe('<RockPaperScissorsStatus />', () => {
  describe('Layout', () => {
    it('should not display the player selection if there is no choice', async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {
          playerChoice: null,
        },
      });

      expect(queryByText(/^You choose.*/i)).not.toBeInTheDocument();
    });
    it('should not display the cpu selection if there is no choice', async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {
            playerChoice: null,
            cpuChoice: null
        }
      });

      expect(queryByText(/^Computer choose.*/i)).not.toBeInTheDocument();
    });
    it("should not display the any message if the player and cpu have no choice", async () => {
      const { queryByText } = await setupRender(StatusComponent, {
        componentProperties: {
          playerChoice: null,
          cpuChoice: null,
          status: 'idle',
        },
      });

      expect(queryByText(/^you lose.*/i)).not.toBeInTheDocument();
      expect(queryByText(/^you win.*/i)).not.toBeInTheDocument();
      expect(queryByText(/^draw.*/i)).not.toBeInTheDocument();
    });
  });
});
