import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from "./modules/skills";
import works from "./modules/works";
import blogs from "./modules/blogs";


export default new Vuex.Store({
    modules: {
        skills,
        works,
        blogs
    }
});