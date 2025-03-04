import { css, cx } from '@styled-system/css'

export type NavItemProps = {
  label: string
  active: boolean
  onClick: VoidFunction
}

export const NavItem = ({ label, active, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        css({
          py: 'sm',
          px: 'md',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 'xs',
          color: 'primary.500',
          transitionDuration: 'normal'
        }),
        !active &&
          css({
            cursor: 'pointer',
            color: '#ffffff',

            _hover: {
              '& .nav-item-bullet': {
                transform: 'rotate(-45deg)'
              }
            },
            _focus: {
              '& .nav-item-bullet': {
                transform: 'rotate(-45deg)'
              }
            }
          })
      )}
    >
      <span
        className={cx(
          'nav-item-bullet',
          css({
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transitionDuration: 'normal'
          })
        )}
      >
        <span
          className={cx(
            css({
              height: '16px',
              width: '16px',
              background: 'currentcolor',
              transitionDuration: 'faster'
            }),
            !active &&
              css({
                width: '8px',
                height: '8px',
                transform: 'rotate(45deg)'
              })
          )}
        ></span>
      </span>
      <span>{label}</span>
    </button>
  )
}
