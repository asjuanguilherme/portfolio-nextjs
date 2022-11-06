import * as S from './styles'
import * as animationData from './animationData.json'
import Lottie from 'lottie-react'
import designSystemOptions from 'styles/designSystemOptions'

export type LoaderProps = {
  size: 'smaller' | 'small' | 'medium' | 'large' | 'larger'
}

const Loader = ({ size = 'medium' }: LoaderProps) => {
  return (
    <S.Wrapper>
      <Lottie
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
        animationData={animationData}
        width={designSystemOptions.spacing.sections[size]}
        height={designSystemOptions.spacing.sections[size]}
        style={{ margin: 'initial' }}
      />
    </S.Wrapper>
  )
}

export default Loader
