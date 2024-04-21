<template>
	<view>
		
		<swiper class="guide-swiper" indicator-active-color="#ffffff" indicator-dots="true" autoplay="false" loop="false"
			circular="false">
			<block v-for="(item,index) in guidelist" :key="index">
				<swiper-item class="guide-swiper-item">
					<image @click="bannerTo(item, index)" class="guide-swiper-img" :src="item.img"></image>
					<h1>{{item.title}}</h1> 
				</swiper-item>
			</block>
		</swiper>
		
		<h1>引导页面</h1>
		<button @click="toHomePage">立即体验</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				guidelist: [{
						img: '../../static/images/login_bg.png',
						title: 'Title 1',
						desc: 'Description 1'
					},
					{
						img: '../../static/images/login_bg.png',
						title: 'Title 2',
						desc: 'Description 2'
					},
					{
						img: '../../static/images/login_bg.png',
						title: 'Title 3',
						desc: 'Description 3'
					},
					{
						img: '../../static/images/login_bg.png',
						title: 'Title 4',
						desc: 'Description 4'
					},
				]
			}
		},
		methods:{
			toHomePage(){
				uni.navigateTo({
					// url:'/pages/userinfo/userinfo'
					url:'/pages/picker/picker'
					// url:'/pages/picker-view/picker-view'
				})
			}
		}
	}
</script>

<style>
	page{
		/* background: #FAFAFA; */
		/* 修改主界面背景 */
		/* background-image: url(../../static/images/login_bg.png); */
		background-color: aqua;
		background-size: 100% 100%;
		margin: 30rpx;
	}
	.guide-swiper{
		margin-top: 60rpx;
	}
	.guide-swiper-item{
		width: 100%;
		/* height: 70%; */
		
	} 
</style>