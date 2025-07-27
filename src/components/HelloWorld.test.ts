import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { expect, test } from 'vitest'

test('renders props.msg when passed', () => {
  const msg = 'Hello Vitest'
  const wrapper = mount(HelloWorld, {
    props: { msg }
  })
  expect(wrapper.text()).toContain(msg)
})
