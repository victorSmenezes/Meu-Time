import { AppProvider } from '@/context';
import { GlobalStyle } from '@/styles/globalStyles';

export const metadata = {
  title: 'Meu Time',

  description: 'Venha ver o sobre o seu time ou qualquer outro aqui.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <GlobalStyle />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
