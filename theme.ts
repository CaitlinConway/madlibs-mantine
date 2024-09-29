'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    halloween: [
      '#FFF5E6', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726',
      '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100'
    ],
    pumpkin: [
      '#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726',
      '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100'
    ],
    ghost: [
      '#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C',
      '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238'
    ],
  },
  primaryColor: 'halloween',
  primaryShade: { light: 6, dark: 8 },
  white: '#FFFFFF',
  black: '#000000',
  components: {
    Button: {
      defaultProps: {
        color: 'halloween',
      },
    },
    Body: {
      styles: (theme: { colorScheme: string; colors: { ghost: any[]; halloween: any[]; }; }) => ({
        root: {
          backgroundColor: theme.colorScheme === 'dark'
            ? theme.colors.ghost[9]
            : theme.colors.halloween[1],
        },
      }),
    },
  },
  other: {
    backgroundColor: {
      light: 'var(--mantine-color-halloween-1)',
      dark: '#263238',
    },
    textColor: {
      light: '#263238',
      dark: '#FFF5E6',
    },
  },
});
