import { ReactNode } from 'react'
import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

export type ContainerProps = { children: ReactNode }

const { containerMaxWidht, gutter } = designSystemOptions.layout

const Container = styled.div`
  width: 100%;
  max-width: ${containerMaxWidht};
  margin: 0 auto;
  padding: 0 ${gutter};
`

export default Container
