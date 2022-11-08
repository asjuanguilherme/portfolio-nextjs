import { TestimonialCardProps } from '../components/shared/TestimonialCard'

const testimonialMockup = {
  id: 0,
  author: {
    name: 'First Name',
    role: 'Role',
    image: { url: '/assets/images/image-placeholder.png', alt: '' },
    company: 'Company'
  },
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus, purus eu tempor suscipit, nisi augue eleifend urna, vitae tincidunt metus mauris dignissim tortor. Vivamus ac porttitor turpis.'
}

const testimonialListMockup: (TestimonialCardProps & { id: number })[] = []

for (let i = 0; i < 4; i++) {
  testimonialListMockup.push({ ...testimonialMockup, id: i })
}

export default testimonialListMockup
