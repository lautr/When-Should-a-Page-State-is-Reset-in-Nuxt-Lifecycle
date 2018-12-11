import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';

import LeftHook from '~/mixins/left-hook';

it('left throws an error', () => {
  const wrapper = shallowMount({
    render: h => h(),
    mixins: [LeftHook],
  });
  expect(wrapper.vm.left).toThrow('`left` method should be overridden');
});

it("left do NOT throw an error, if it's overridden by the component", () => {
  const wrapper = shallowMount({
    render: h => h(),
    methods: {
      left() {
        // do something
      },
    },
    mixins: [LeftHook],
  });
  expect(wrapper.vm.left).not.toThrow();
});

it('left is called when the component is destroyed', () => {
  const left = jest.fn();
  const wrapper = shallowMount({
    render: h => h(),
    methods: {
      left,
    },
    mixins: [LeftHook],
  });
  expect(left).not.toHaveBeenCalled();
  wrapper.destroy();
  expect(left).toHaveBeenCalled();
});

describe('After the navigation, left', () => {
  let left;
  let router;
  let wrapper;

  beforeEach(() => {
    // set the router
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    router = new VueRouter();

    // mount a component mixed LeftHook
    left = jest.fn();
    wrapper = shallowMount(
      {
        render: h => h(),
        methods: {
          left,
        },
        mixins: [LeftHook],
      },
      {
        localVue,
        router,
      }
    );

    // add routes
    router.addRoutes([
      {
        path: '/foo/:id',
        component: wrapper.vm.constructor,
        children: [
          {
            path: 'baz',
            component: { render: h => h() },
          },
        ],
      },
      { path: '/bar', component: { render: h => h() } },
    ]);
    router.push('/foo/1');
  });

  it('is NOT called if the component is the next routed component.', () => {
    router.push('/foo/2');
    wrapper.destroy();
    expect(left).not.toHaveBeenCalled();
  });

  it('is NOT called if the component is one of the next routed components', () => {
    router.push('/foo/1/baz');
    wrapper.destroy();
    expect(left).not.toHaveBeenCalled();
  });

  it("is called if the component isn't the next routed component", () => {
    router.push('/bar');
    wrapper.destroy();
    expect(left).toHaveBeenCalled();
  });
});
