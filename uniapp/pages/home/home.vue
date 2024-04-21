<template>
	<view>
		<h1>Home页面</h1>

		<view class="home_value_view" @click="toSurveyValue">
			<text>价值观</text>
		</view>

		<view class="home_value_view" @click="toSurveyTallent">
			<text>天赋</text>
		</view>

		<view class="home_value_view" @click="toSurveyInterest">
			<text>最喜欢</text> 
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toSurveyValue() {
				console.log("点击了")
				uni.navigateTo({
					url: '/pages/survey/surveyValue'
				})
			},
			toSurveyTallent() {
				uni.navigateTo({
					url: '/pages/survey/surveyTalent'
				})
			},
			toSurveyInterest() {
				uni.navigateTo({
					url: '/pages/survey/surveyInterest'
				})
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