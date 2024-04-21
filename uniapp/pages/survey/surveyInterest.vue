<template>
	<view>
		<h1>Interest页面</h1>

		<view class="home_value_view" @click="toSurveyInterest">
			<text>最喜欢</text>
		</view>
	</view>

</template>

<script>
	
	export default {
		data(){
			return {
				
			}
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