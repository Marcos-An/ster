import { extendTheme, ComponentStyleConfig } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: 'gray.800',
      color: 'white'
    }
  }
}
const colors = {
  white: '#ffffff',
  black: '#000000',
  yellow: '#FCA311',
  blue: '#309CFF',
  red: {
    500: '#ED4245'
  },
  green: '#1ABA00',
  gray: {
    800: '#36393F',
    700: '#404246',
    600: '#545861',
    500: '#535353',
    400: '#6D6D6D',
    300: '#9B9B9B',
    200: '#E2E2E2'
  }
}
const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`
}

const Button: ComponentStyleConfig = {
  sizes: {
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 6 // <-- these values are tokens from the design system
    }
  },
  variants: {
    icon: {
      _active: {
        bg: '#9B9B9B'
      }
    },
    main: {
      width: '100%',
      bg: 'yellow',
      color: 'white',
      _active: {
        bg: '#D49226'
      }
    }
  }
}

const theme = extendTheme({
  colors,
  styles,
  fonts,
  components: {
    Button
  }
})
export default theme
