<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title-uni-common-pl">性别</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<!-- <view class="uni-list-cell-left">
					当前选择
				</view> -->
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="genderIndex" :range="genderArray" range-key="name">
						<view class="uni-input">{{genderArray[genderIndex].name}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title-uni-common-pl">生日</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<!-- <view class="uni-list-cell-left">
					当前选择
				</view> -->
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title-uni-common-pl">来此目的</view>
		<view class="uni-list">
			<view class="uni-list-cell">

				<view class="uni-list-cell-db">
					<picker @change="bindPickerPurposeChange" :value="purposeIndex" :range="purposeArray"
						range-key="name">
						<view class="uni-input">{{purposeArray[purposeIndex].name}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="button-container">
			<button class="next" @click="toHomePage">下一步</button>
		</view>

	</view>
</template>
<script>
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 50;
		} else if (type === 'end') {
			year = year;
		} else {
			year = year - 23;
		}
		
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}
	
	export default {
		data() {
			return {
				title: 'lifestep',
				genderArray: [{
					name: '男'
				}, {
					name: '女'
				}, {
					name: '其他'
				}],
				purposeArray: [{
					name: '职业规划'
				}, {
					name: '转行'
				}, {
					name: '都有'
				}],
				
				genderIndex: 0,
				purposeIndex: 0,
				multigenderIndex: [0, 0, 0],
				
				date: getDate({
					format: true
				}),
				
				startDate: getDate('start'),
				
				endDate: getDate('end'),
				
				time: '12:01'
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.genderIndex = e.detail.value
			},
			bindPickerPurposeChange: function(e) {
				this.purposeIndex = e.detail.value
			},
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			bindTimeChange: function(e) {
				this.time = e.detail.value
			},
			toHomePage: function() {
				console.log("去home页面")
				uni.navigateTo({
					url: '/pages/home/home'
				})
			}

		}
	}
</script>

<style>
	page {
		margin: 30rpx;
	}

	.uni-title-uni-common-pl {
		margin-top: 20rpx;
		font-weight: bold;
	}

	.uni-picker-tips {
		font-size: 12px;
		color: #666;
		margin-bottom: 15px;
		padding: 0 15px;
		/* text-align: right; */
	}

	.button-container {
		/* width: 80%; */
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50rpx;
	}
	
	.next{
		background-color: cornflowerblue;
		color: #fff;
	}
	
	
</style>