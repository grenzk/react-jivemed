import { Global } from '@mantine/core'
import light from '../assets/fonts/normal/GreycliffCF-Light.woff2'
import regular from '../assets/fonts/normal/GreycliffCF-Regular.woff2'
import medium from '../assets/fonts/normal/GreycliffCF-Medium.woff2'
import demiBold from '../assets/fonts/normal/GreycliffCF-DemiBold.woff2'
import bold from '../assets/fonts/normal/GreycliffCF-Bold.woff2'
import extraBold from '../assets/fonts/normal/GreycliffCF-ExtraBold.woff2'
import heavy from '../assets/fonts/normal/GreycliffCF-Heavy.woff2'
import lightOblique from '../assets/fonts/oblique/GreycliffCF-LightOblique.woff2'
import regularOblique from '../assets/fonts/oblique/GreycliffCF-RegularOblique.woff2'
import mediumOblique from '../assets/fonts/oblique/GreycliffCF-MediumOblique.woff2'
import demiBoldOblique from '../assets/fonts/oblique/GreycliffCF-DemiBoldOblique.woff2'
import boldOblique from '../assets/fonts/oblique/GreycliffCF-BoldOblique.woff2'
import extraBoldOblique from '../assets/fonts/oblique/GreycliffCF-ExtraBoldOblique.woff2'
import heavyOblique from '../assets/fonts/oblique/GreycliffCF-HeavyOblique.woff2'

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${light}') format("woff2")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${medium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${demiBold}') format("woff2")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${extraBold}') format("woff2")`,
            fontWeight: 800,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${heavy}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${lightOblique}') format("woff2")`,
            fontWeight: 300,
            fontStyle: 'oblique',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${regularOblique}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'oblique',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${mediumOblique}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'oblique',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${demiBoldOblique}') format("woff2")`,
            fontWeight: 600,
            fontStyle: 'oblique',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${boldOblique}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'oblique',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${extraBoldOblique}') format("woff2")`,
            fontWeight: 800,
            fontStyle: 'oblique',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${heavyOblique}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'oblique',
          },
        },
      ]}
    />
  )
}

export default CustomFonts
