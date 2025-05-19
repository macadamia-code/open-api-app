// 'use client';

// import { CacheProvider } from '@emotion/react';
// import createEmotionCache from '@/lib/createEmotionCache';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '@/lib/theme';

// const clientSideEmotionCache = createEmotionCache();

// export default function EmotionProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <CacheProvider value={clientSideEmotionCache}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }

'use client';

import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/lib/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';

const clientSideEmotionCache = createEmotionCache();

export default function EmotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}