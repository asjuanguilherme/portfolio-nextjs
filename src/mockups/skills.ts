import { SkillProps } from 'components/shared/Skill'

const skillMockup = {
  id: 0,
  title: 'Icon',
  hoverColor: 'red',
  icon: {
    svgContent:
      '<path d="M1.927 23.935a2.4 2.4 0 0 1-1.882-1.883 2.4 2.4 0 0 1 2.82-2.82 2.4 2.4 0 0 1 1.882 1.882 2.4 2.4 0 0 1-2.82 2.82zM21.135 4.768a2.4 2.4 0 0 1-1.882-1.882 2.4 2.4 0 0 1 2.82-2.82 2.4 2.4 0 0 1 1.882 1.882 2.4 2.4 0 0 1-2.82 2.82zM12.021 6.01c1.147 0 2.219.324 3.13.883l2.585-2.585A9.583 9.583 0 0 0 4.328 17.716l2.586-2.586a5.99 5.99 0 0 1 5.107-9.12zm5.107 2.86a5.99 5.99 0 0 1-8.237 8.237l-2.586 2.585A9.583 9.583 0 0 0 19.713 6.284z" />',
    viewBox: '0 0 24 24'
  }
}

const skillListMockup: (SkillProps & { id: number })[] = []

for (let i = 0; i < 18; i++) {
  skillListMockup.push({ ...skillMockup, id: i })
}

export default skillListMockup
