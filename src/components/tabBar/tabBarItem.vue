<template>
	<div class="item" @click="to">
		<div>
			<slot v-if="!isActive" name="icon"></slot>
			<slot v-else name="icon_active"></slot>
		</div>
		<!-- <slot name="icon_active"></slot> -->
		<div :style="{'color': isActive? activeColor:''}">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			path : String,
			activeColor:{
				type:String,
				default : "red"
			}
		},
		data(){
			return{
				// isActive:false,
				// path:''
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			}
		},
		methods:{
			to(){
				console.log(this.$props)
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.item{
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		font-size:14px;
		padding-top: 4px;
	}
	.item img{
		width: 24px;
		height: 24px;
		vertical-align: middle;
	}
	.active{
		color: #d81e06;
	}
</style>
