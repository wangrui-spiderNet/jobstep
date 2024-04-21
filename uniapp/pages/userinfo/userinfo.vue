<template>
	<view class="page">
		<form>
			<select v-model="selectedGender">
				<option disabled value="">请选择</option>
				<option selected value="male">男</option>
				<option value="female">女</option>
				<option value="other">其他</option>
			</select>
			
			<p>您选择的性别是：{{ selectedGender }}</p>
		</form>

	</view>
</template>

<script>
	import { ref } from 'vue'; 
	
	export default {
		name: 'GenderSelector',
		setup() {
			const selectedGender = ref(''); // 初始化选中的性别为空字符串  

			return {
				selectedGender // 返回响应式数据供模板使用  
			}
		},
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style>
	.page {
		margin: 50rpx;
	}
</style>