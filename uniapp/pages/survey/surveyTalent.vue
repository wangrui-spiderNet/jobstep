<template>
	<view>
		<h1>Talent页面</h1>

		<view class="home_value_view" @click="toSurveyTallent">
			<text>天赋</text>
		</view>

	</view>

</template>

<script>
	
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}

</script>

<style>
	page {
		margin: 30rpx;
		margin-top: 50rpx;
		background-color: aliceblue;
	}

	.home_value_view {
		margin-top: 20rpx;
		width: 100%;
		height: 100rpx;
		background-color: antiquewhite;
		display: flex;
	}
</style>