import * as S from './styles'
import * as animationData from './animationData.json'
import { useEffect, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import designSystemOptions from 'styles/designSystemOptions'

export type MenuToggleProps = {
  menuOpened: boolean
  menuToggle: () => void
}

const MenuToggle = ({ menuOpened, menuToggle }: MenuToggleProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    if (menuOpened) {
      lottieRef.current?.setDirection(1)
      lottieRef.current?.play()
    }
    if (!menuOpened) {
      lottieRef.current?.setDirection(-1)
      lottieRef.current?.play()
    }
  }, [lottieRef, menuOpened])

  return (
    <S.Wrapper
      onClick={menuToggle}
      menuOpened={menuOpened}
      aria-label={menuOpened ? 'Fechar Menu' : 'Abrir Menu'}
    >
      <Lottie
        lottieRef={lottieRef}
        loop={false}
        autoplay={false}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
        animationData={animationData}
        width={designSystemOptions.font.sizes.large}
        height={designSystemOptions.font.sizes.large}
        style={{ margin: 'initial' }}
      />
    </S.Wrapper>
  )
}

export default MenuToggle
