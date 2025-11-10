import { setupRender, setupUser } from '../../../../testing/testUtils';
import { RockPaperComponent } from './rockPaper.component';

const user = setupUser();

describe('<RockPaper />', () => {
  describe('Interaction', () => {
    it('should display a message indicating the player move when the user clicked a choice', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      await user.click(queryByTitle('Rock')!);

      expect(queryByText(/^You choose.*/)).toHaveTextContent('You choose ROCK');
    });
    it('should display a message indicating the cpu move when the user clicked a choice', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      jest.spyOn(Math, 'random').mockReturnValueOnce(0.9);
      await user.click(queryByTitle('Rock')!);

      expect(queryByText(/^Computer choose.*/)).toHaveTextContent(
        'Computer choose SCISSORS'
      );
    });
    it('should display a message indicating if the player won', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      jest.spyOn(Math, 'random').mockReturnValueOnce(0.1);
      await user.click(queryByTitle('Paper')!);

      expect(queryByText('YOU WON 🎉')).toBeInTheDocument();
    });
    it('should display a message indicating if the player lose', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      jest.spyOn(Math, 'random').mockReturnValueOnce(0.9);
      await user.click(queryByTitle('Paper')!);

      expect(queryByText('YOU LOSE 😢')).toBeInTheDocument();
    });
    it('should display a message indicating if there is a tie', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      jest.spyOn(Math, 'random').mockReturnValueOnce(0.9);
      await user.click(queryByTitle('Scissors')!);

      expect(queryByText('DRAW 🤝')).toBeInTheDocument();
    });
    it('should increase the cpu score by 1 if they win', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      expect(queryByText(/^You:.*/)).toHaveTextContent('You: 0');
      jest.spyOn(Math, 'random').mockReturnValueOnce(0.1);
      await user.click(queryByTitle('Paper')!);

      expect(queryByText(/^YOU WON.*/)).toBeInTheDocument();
      expect(queryByText(/^You:.*/)).toHaveTextContent('You: 1');
    });
    it('should increase the cpu score by 1 if they lose', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      expect(queryByText(/^Computer:.*/)).toHaveTextContent('Computer: 0');
      jest.spyOn(Math, 'random').mockReturnValueOnce(0.9);
      await user.click(queryByTitle('Paper')!);

      expect(queryByText(/^Computer:.*/)).toHaveTextContent('Computer: 1');
    });
    it('should not increase any score if there is a tie', async () => {
      const { queryByTitle, queryByText } = await setupRender(
        RockPaperComponent
      );

      expect(queryByText(/^Computer:.*/)).toHaveTextContent('Computer: 0');
      expect(queryByText(/^You:.*/)).toHaveTextContent('You: 0');
      jest.spyOn(Math, 'random').mockReturnValueOnce(0.9);
      await user.click(queryByTitle('Scissors')!);

      expect(queryByText(/^Computer:.*/)).toHaveTextContent('Computer: 0');
      expect(queryByText(/^You:.*/)).toHaveTextContent('You: 0');
    });
  });
});
