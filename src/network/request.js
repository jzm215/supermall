// import axios from ""
export function request(config){
	const instance = axios.create({
		baseURL:"xxxxx",
		timeout:5000
	})
	
	instance.interceptors.request.use(config =>{
		return config
	},err =>{
		return err
	})
	
	instance.interceptors.response.use(res =>{
		return res
	},err =>{
		return err
	})
	
	return instance(config)
	
	
}