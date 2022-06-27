import GlobalStyles from '../src/styles/global';
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/themes/dark'

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  ),
];
