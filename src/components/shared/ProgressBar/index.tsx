import { css, cx } from '@styled-system/css'

export type ProgressBarProps = {
  className?: string
  progressPercent: number
  showPercentText?: boolean
}

export const ProgressBar = ({
  className,
  progressPercent,
  showPercentText = true
}: ProgressBarProps) => {
  if (progressPercent === undefined) {
    throw new Error(
      'progressPercent value must be higher than 0 and lower than 100.'
    )
  }

  if (progressPercent < 0) {
    throw new Error('progressPercent cannot be lower than 0.')
  }

  if (progressPercent > 100) {
    console.log(progressPercent)
    throw new Error('progressPercent cannot be higher than 100.')
  }

  return (
    <div
      className={cx(
        className,
        css({
          width: '100%',
          display: 'flex',
          flexDir: 'column',
          gap: 'sm',
          alignItems: 'center'
        })
      )}
    >
      <div
        className={css({
          width: '100%',
          border: '2px solid {colors.secondary.500}',
          padding: '.25em'
        })}
      >
        <span
          style={{ width: `${progressPercent}%` }}
          className={css({
            width: '0%',
            display: 'block',
            height: '1em',
            transitionDuration: 'normal',
            bg: 'secondary.500'
          })}
        ></span>
      </div>
      {showPercentText && (
        <span className={css({ fontSize: '1.5em', fontWeight: 'medium' })}>
          {progressPercent} %
        </span>
      )}
    </div>
  )
}

export default ProgressBar
