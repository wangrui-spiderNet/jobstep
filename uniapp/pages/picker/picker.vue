<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-app-introduction">人生短暂，行我所爱！</view>
		<view class="uni-app-welcome">欢迎来到知我AI职业规划小程序！</view>
		<view class="uni-app-welcome">你了解自己最看重的事情吗？</view>
		<view class="uni-app-welcome">你了解自己最厉害的天赋吗？</view>
		<view class="uni-app-welcome">你了解自己真正的兴趣所在吗？</view>
		<view class="uni-app-welcome">做自己热爱的事情能够激发出个人最大的创造力，</view>
		<view class="uni-app-welcome">同时收获更多的成就和快乐。</view>
		<view class="uni-app-welcome">跟着我们的脚步去找到你最热爱的事情吧！</view>

		<view class="uni-title-uni-common-pl">姓名</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<!-- <view class="uni-list-cell-left">
					当前选择
				</view> -->
				<view class="uni-list-cell-db">
					<input placeholder="请输入您的姓名" v-model="username" @blur="validateInput" />
				</view>

			</view>
		</view>

		<p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

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
				username: '',
				errorMessage: '',

				genderArray: [{
					name: '男'
				}, {
					name: '女'
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

			validateInput() {
				// 简单的验证逻辑，这里只是检查输入是否为空  
				if (!this.validateInput) {
					this.errorMessage = '请输入姓名！';
				} else {
					this.errorMessage = '';
				}
			},
			toHomePage: function() {
				console.log("去home页面-姓名:" + this.username)

				if (this.username.trim().length != 0) {
					this.errorMessage = '';
					uni.navigateTo({
						url: '/pages/home/home'
					})
				} else {
					console.log('姓名为空')
					this.errorMessage = '请输入姓名！';
				}
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

	.next {
		background-color: cornflowerblue;
		color: #fff;
	}

	.error-message {
		color: #FF5733;
	}
</style>