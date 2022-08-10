import { ElementType, useEffect } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

export default function WithAuth(WrappedComponent: ElementType) {
  const Wrapper = (props) => {
    const router = useRouter()

    useEffect(() => {
      const token = Cookie.get('token')

      if (!token) {
        router.replace('/login')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}
