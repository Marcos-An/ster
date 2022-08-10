import { extendTheme, ComponentStyleConfig } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: 'gray.700',
      color: 'white',
      padding: '0 0.938rem'
    }
  }
}
const colors = {
  white: '#ffffff',
  black: '#000000',
  yellow: '#FCA311',
  blue: '#309CFF',
  green: '#1ABA00',
  gray: {
    700: '#36393F',
    600: '#545861',
    500: '#6D6D6D',
    400: '#9B9B9B',
    300: '#E2E2E2'
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
    main: {
      width: '100%',
      bg: 'yellow',
      color: 'white',
      _hover: {
        bg: '#E39C26'
      },
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
