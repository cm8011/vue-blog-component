import Post from './components/Post';

export default {
    install(Vue) {
        Vue.component('post', Post);
    }
};

export { Post };