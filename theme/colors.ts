import type { Theme } from './types'

export const THEME = 'dark'

export const transparency = {
  BORDER: 0.5,
  SHADOW: 0.5,
  DROP: 0.5,
  DISABLED: 0.5,
  BACKGROUND: 0.1,
  BACKGROUND_HOVER: 0.2,
  INACTIVE: 0.3,
  GUIDES: 0.5,
  TEXT: 0.4,
}

export const Colors: Theme = {
  seed: '#52818E',
  coreColors: {
    primary: '#52818E',
    secondary: '#A8B280',
    tertiary: '#47563C',
    error: '#D3615F',
    neutral: '#909191',
    neutralVariant: '#FCF8F0',
  },
  extendedColors: [],
  schemes: {
    light: {
      primary: '#255663',
      surfaceTint: '#356571',
      onPrimary: '#FFFFFF',
      primaryContainer: '#4C7B88',
      onPrimaryContainer: '#FFFFFF',
      secondary: '#596238',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#B2BC89',
      onSecondaryContainer: '#262E09',
      tertiary: '#34422A',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#56664A',
      onTertiaryContainer: '#FFFFFF',
      error: '#8F2E2F',
      onError: '#FFFFFF',
      errorContainer: '#BF5250',
      onErrorContainer: '#FFFFFF',
      confirm: '#8F2F2E',
      onConfirm: '#FFFFFF',
      confirmContainer: '#BF5052',
      onConfirmContainer: '#FFFFFF',
      background: '#F9F9FA',
      onBackground: '#1A1C1D',
      surface: '#F9F9FA',
      onSurface: '#1A1C1D',
      surfaceVariant: '#E6E2D9',
      onSurfaceVariant: '#484740',
      outline: '#79776F',
      outlineVariant: '#C9C6BD',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#2E3132',
      inverseOnSurface: '#F0F1F1',
      inversePrimary: '#9ECEDC',
      primaryFixed: '#BAEAF9',
      onPrimaryFixed: '#001F26',
      primaryFixedDim: '#9ECEDC',
      onPrimaryFixedVariant: '#1A4D59',
      secondaryFixed: '#DEE8B2',
      onSecondaryFixed: '#171E00',
      secondaryFixedDim: '#C1CC98',
      onSecondaryFixedVariant: '#424A22',
      tertiaryFixed: '#D7E8C6',
      onTertiaryFixed: '#121F0A',
      tertiaryFixedDim: '#BBCCAB',
      onTertiaryFixedVariant: '#3C4B32',
      surfaceDim: '#D9DADB',
      surfaceBright: '#F9F9FA',
      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F3F4F4',
      surfaceContainer: '#EDEEEF',
      surfaceContainerHigh: '#E7E8E9',
      surfaceContainerHighest: '#E2E2E3',
    },
    'light-medium-contrast': {
      primary: '#154955',
      surfaceTint: '#356571',
      onPrimary: '#FFFFFF',
      primaryContainer: '#4C7B88',
      onPrimaryContainer: '#FFFFFF',
      secondary: '#3E461F',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#70794C',
      onSecondaryContainer: '#FFFFFF',
      tertiary: '#34422A',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#56664A',
      onTertiaryContainer: '#FFFFFF',
      error: '#7D2123',
      onError: '#FFFFFF',
      errorContainer: '#BF5250',
      onErrorContainer: '#FFFFFF',
      confirm: '',
      onConfirm: '',
      confirmContainer: '',
      onConfirmContainer: '',
      background: '#F9F9FA',
      onBackground: '#1A1C1D',
      surface: '#F9F9FA',
      onSurface: '#1A1C1D',
      surfaceVariant: '#E6E2D9',
      onSurfaceVariant: '#44433C',
      outline: '#615F58',
      outlineVariant: '#7D7B73',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#2E3132',
      inverseOnSurface: '#F0F1F1',
      inversePrimary: '#9ECEDC',
      primaryFixed: '#4C7B88',
      onPrimaryFixed: '#FFFFFF',
      primaryFixedDim: '#33626F',
      onPrimaryFixedVariant: '#FFFFFF',
      secondaryFixed: '#70794C',
      onSecondaryFixed: '#FFFFFF',
      secondaryFixedDim: '#576036',
      onSecondaryFixedVariant: '#FFFFFF',
      tertiaryFixed: '#6A795D',
      onTertiaryFixed: '#FFFFFF',
      tertiaryFixedDim: '#516146',
      onTertiaryFixedVariant: '#FFFFFF',
      surfaceDim: '#D9DADB',
      surfaceBright: '#F9F9FA',
      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F3F4F4',
      surfaceContainer: '#EDEEEF',
      surfaceContainerHigh: '#E7E8E9',
      surfaceContainerHighest: '#E2E2E3',
    },
    'light-high-contrast': {
      primary: '#00262F',
      surfaceTint: '#356571',
      onPrimary: '#FFFFFF',
      primaryContainer: '#154955',
      onPrimaryContainer: '#FFFFFF',
      secondary: '#1E2502',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#3E461F',
      onSecondaryContainer: '#FFFFFF',
      tertiary: '#182610',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#38472E',
      onTertiaryContainer: '#FFFFFF',
      error: '#4D0008',
      onError: '#FFFFFF',
      errorContainer: '#7D2123',
      onErrorContainer: '#FFFFFF',
      confirm: '',
      onConfirm: '',
      confirmContainer: '',
      onConfirmContainer: '',
      background: '#F9F9FA',
      onBackground: '#1A1C1D',
      surface: '#F9F9FA',
      onSurface: '#000000',
      surfaceVariant: '#E6E2D9',
      onSurfaceVariant: '#25241E',
      outline: '#44433C',
      outlineVariant: '#44433C',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#2E3132',
      inverseOnSurface: '#FFFFFF',
      inversePrimary: '#CBF3FF',
      primaryFixed: '#154955',
      onPrimaryFixed: '#FFFFFF',
      primaryFixedDim: '#00323C',
      onPrimaryFixedVariant: '#FFFFFF',
      secondaryFixed: '#3E461F',
      onSecondaryFixed: '#FFFFFF',
      secondaryFixedDim: '#28300A',
      onSecondaryFixedVariant: '#FFFFFF',
      tertiaryFixed: '#38472E',
      onTertiaryFixed: '#FFFFFF',
      tertiaryFixedDim: '#23311A',
      onTertiaryFixedVariant: '#FFFFFF',
      surfaceDim: '#D9DADB',
      surfaceBright: '#F9F9FA',
      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F3F4F4',
      surfaceContainer: '#EDEEEF',
      surfaceContainerHigh: '#E7E8E9',
      surfaceContainerHighest: '#E2E2E3',
    },
    dark: {
      primary: '#9ECEDC',
      surfaceTint: '#9ECEDC',
      onPrimary: '#003640',
      primaryContainer: '#487784',
      onPrimaryContainer: '#FFFFFF',
      secondary: '#CAD49F',
      onSecondary: '#2C340E',
      secondaryContainer: '#A1AB79',
      onSecondaryContainer: '#171E00',
      tertiary: '#BBCCAB',
      onTertiary: '#26341D',
      tertiaryContainer: '#3D4C32',
      onTertiaryContainer: '#D5E7C5',
      error: '#FFB3AF',
      onError: '#630D13',
      errorContainer: '#BF5250',
      onErrorContainer: '#FFFFFF',
      confirm: '#FFB3AF',
      onConfirm: '#630D13',
      confirmContainer: '#BF5250',
      onConfirmContainer: '#FFFFFF',
      background: '#111415',
      onBackground: '#E2E2E3',
      surface: '#111415',
      onSurface: '#E2E2E3',
      surfaceVariant: '#484740',
      onSurfaceVariant: '#C9C6BD',
      outline: '#939188',
      outlineVariant: '#484740',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#E2E2E3',
      inverseOnSurface: '#2E3132',
      inversePrimary: '#356571',
      primaryFixed: '#BAEAF9',
      onPrimaryFixed: '#001F26',
      primaryFixedDim: '#9ECEDC',
      onPrimaryFixedVariant: '#1A4D59',
      secondaryFixed: '#DEE8B2',
      onSecondaryFixed: '#171E00',
      secondaryFixedDim: '#C1CC98',
      onSecondaryFixedVariant: '#424A22',
      tertiaryFixed: '#D7E8C6',
      onTertiaryFixed: '#121F0A',
      tertiaryFixedDim: '#BBCCAB',
      onTertiaryFixedVariant: '#3C4B32',
      surfaceDim: '#111415',
      surfaceBright: '#37393A',
      surfaceContainerLowest: '#0C0F0F',
      surfaceContainerLow: '#1A1C1D',
      surfaceContainer: '#1E2021',
      surfaceContainerHigh: '#282A2B',
      surfaceContainerHighest: '#333536',
    },
    'dark-medium-contrast': {
      primary: '#A2D2E1',
      surfaceTint: '#9ECEDC',
      onPrimary: '#001920',
      primaryContainer: '#6998A5',
      onPrimaryContainer: '#000000',
      secondary: '#CAD49F',
      onSecondary: '#161D00',
      secondaryContainer: '#A1AB79',
      onSecondaryContainer: '#000000',
      tertiary: '#BFD0AF',
      onTertiary: '#0D1A06',
      tertiaryContainer: '#859678',
      onTertiaryContainer: '#000000',
      error: '#FFB9B6',
      onError: '#370004',
      errorContainer: '#E26D6A',
      onErrorContainer: '#000000',
      confirm: '',
      onConfirm: '',
      confirmContainer: '',
      onConfirmContainer: '',
      background: '#111415',
      onBackground: '#E2E2E3',
      surface: '#111415',
      onSurface: '#FAFBFB',
      surfaceVariant: '#484740',
      onSurfaceVariant: '#CECBC1',
      outline: '#A5A39A',
      outlineVariant: '#85837B',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#E2E2E3',
      inverseOnSurface: '#282A2B',
      inversePrimary: '#1B4E5A',
      primaryFixed: '#BAEAF9',
      onPrimaryFixed: '#001419',
      primaryFixedDim: '#9ECEDC',
      onPrimaryFixedVariant: '#003C48',
      secondaryFixed: '#DEE8B2',
      onSecondaryFixed: '#0E1300',
      secondaryFixedDim: '#C1CC98',
      onSecondaryFixedVariant: '#313A13',
      tertiaryFixed: '#D7E8C6',
      onTertiaryFixed: '#081403',
      tertiaryFixedDim: '#BBCCAB',
      onTertiaryFixedVariant: '#2C3A22',
      surfaceDim: '#111415',
      surfaceBright: '#37393A',
      surfaceContainerLowest: '#0C0F0F',
      surfaceContainerLow: '#1A1C1D',
      surfaceContainer: '#1E2021',
      surfaceContainerHigh: '#282A2B',
      surfaceContainerHighest: '#333536',
    },
    'dark-high-contrast': {
      primary: '#F4FCFF',
      surfaceTint: '#9ECEDC',
      onPrimary: '#000000',
      primaryContainer: '#A2D2E1',
      onPrimaryContainer: '#000000',
      secondary: '#F8FFD3',
      onSecondary: '#000000',
      secondaryContainer: '#C6D09C',
      onSecondaryContainer: '#000000',
      tertiary: '#F3FFE4',
      onTertiary: '#000000',
      tertiaryContainer: '#BFD0AF',
      onTertiaryContainer: '#000000',
      error: '#FFF9F9',
      onError: '#000000',
      errorContainer: '#FFB9B6',
      onErrorContainer: '#000000',
      confirm: '',
      onConfirm: '',
      confirmContainer: '',
      onConfirmContainer: '',
      background: '#111415',
      onBackground: '#E2E2E3',
      surface: '#111415',
      onSurface: '#FFFFFF',
      surfaceVariant: '#484740',
      onSurfaceVariant: '#FEFAF0',
      outline: '#CECBC1',
      outlineVariant: '#CECBC1',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#E2E2E3',
      inverseOnSurface: '#000000',
      inversePrimary: '#002F38',
      primaryFixed: '#BEEFFD',
      onPrimaryFixed: '#000000',
      primaryFixedDim: '#A2D2E1',
      onPrimaryFixedVariant: '#001920',
      secondaryFixed: '#E2ECB6',
      onSecondaryFixed: '#000000',
      secondaryFixedDim: '#C6D09C',
      onSecondaryFixedVariant: '#131900',
      tertiaryFixed: '#DBEDCA',
      onTertiaryFixed: '#000000',
      tertiaryFixedDim: '#BFD0AF',
      onTertiaryFixedVariant: '#0D1A06',
      surfaceDim: '#111415',
      surfaceBright: '#37393A',
      surfaceContainerLowest: '#0C0F0F',
      surfaceContainerLow: '#1A1C1D',
      surfaceContainer: '#1E2021',
      surfaceContainerHigh: '#282A2B',
      surfaceContainerHighest: '#333536',
    },
  },
  palettes: {
    primary: {
      '0': '#000000',
      '5': '#001419',
      '10': '#001F26',
      '15': '#002A33',
      '20': '#003640',
      '25': '#08414D',
      '30': '#1A4D59',
      '35': '#285965',
      '40': '#356571',
      '50': '#4F7E8B',
      '60': '#6998A5',
      '70': '#83B3C0',
      '80': '#9ECEDC',
      '90': '#BAEAF9',
      '95': '#D8F6FF',
      '98': '#F0FBFF',
      '99': '#F8FDFF',
      '100': '#FFFFFF',
    },
    secondary: {
      '0': '#000000',
      '5': '#0E1300',
      '10': '#171E00',
      '15': '#212905',
      '20': '#2C340E',
      '25': '#373F18',
      '30': '#424A22',
      '35': '#4D562D',
      '40': '#596238',
      '50': '#727B4E',
      '60': '#8C9566',
      '70': '#A6B07E',
      '80': '#C1CC98',
      '90': '#DEE8B2',
      '95': '#ECF6BF',
      '98': '#F5FFC7',
      '99': '#FBFFE0',
      '100': '#FFFFFF',
    },
    tertiary: {
      '0': '#000000',
      '5': '#081403',
      '10': '#121F0A',
      '15': '#1C2913',
      '20': '#26341D',
      '25': '#313F27',
      '30': '#3C4B32',
      '35': '#48573D',
      '40': '#546348',
      '50': '#6C7C5F',
      '60': '#859678',
      '70': '#A0B191',
      '80': '#BBCCAB',
      '90': '#D7E8C6',
      '95': '#E5F7D4',
      '98': '#EEFFDD',
      '99': '#F8FFEC',
      '100': '#FFFFFF',
    },
    neutral: {
      '0': '#000000',
      '5': '#101112',
      '10': '#1A1C1C',
      '15': '#252626',
      '20': '#2F3031',
      '25': '#3A3B3C',
      '30': '#464747',
      '35': '#525253',
      '40': '#5E5E5F',
      '50': '#777777',
      '60': '#909191',
      '70': '#ABABAB',
      '80': '#C7C6C6',
      '90': '#E3E2E2',
      '95': '#F1F0F0',
      '98': '#FAF9F9',
      '99': '#FDFCFC',
      '100': '#FFFFFF',
    },
    'neutral-variant': {
      '0': '#000000',
      '5': '#111110',
      '10': '#1C1B1B',
      '15': '#262625',
      '20': '#31302F',
      '25': '#3C3B3A',
      '30': '#484645',
      '35': '#545251',
      '40': '#605E5D',
      '50': '#797775',
      '60': '#93908F',
      '70': '#ADABA9',
      '80': '#C9C6C4',
      '90': '#E5E2E0',
      '95': '#F4F0EE',
      '98': '#FDF8F7',
      '99': '#FFFBFF',
      '100': '#FFFFFF',
    },
  },
}
