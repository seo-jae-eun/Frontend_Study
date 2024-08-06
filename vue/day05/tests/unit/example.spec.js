import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message' // 변수
    const wrapper = shallowMount(HelloWorld, {
      // vue 컴포넌트 파일 불러오기
      props: { msg }
    })
    expect(wrapper.text()).toMatch('zzz') // 확인
  })
})
