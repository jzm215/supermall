import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  num : 0 
  },
  mutations: {
	  addNum(state,payload){
		  state.num += payload.newNum
	  },
	  jianNum(state){
		  state.num--
	  },
	  add(state){
		  state.num++
	  },
	  add1(state){
		state.num +=5
	  }
  },
  actions: {
	  addFive(content ,payload){
		  return new Promise((resolve , reject) =>{
			setTimeout(() =>{
			  console.log(payload)
			  content.commit("add1")
			  console.log("里面开始只行了")
			  resolve("成功执行了")
			},4000)  
		  })
	  }
  },
  modules: {
  },
})
