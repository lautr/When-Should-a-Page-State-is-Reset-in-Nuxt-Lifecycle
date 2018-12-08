import { waitFor } from '~/utils';

export const state = () => ({
  counter: 0,
});

export const actions = {
  async fetch(context) {
    const num = await waitFor(1000, () => 10);
    context.commit('update', num);
  },
  increment(context) {
    context.commit('increment');
  },
  reset(context) {
    context.commit('reset');
  },
};

export const mutations = {
  update(state, num) {
    console.log(`[INFO] mutation: update 🐔's counter`);
    state.counter = num;
  },
  increment(state) {
    state.counter++;
  },
  reset(state) {
    console.log(`[INFO] mutation: RESET 🐔's counter`);
    state.counter = 0;
  },
};
