<template>
	<view>
		<view>{{ questionnaire.name }}</view>
		<view>{{ questionnaire.description}}</view>
		<view v-for="(questionItem,index) in questionnaire.questionAndAnswerList" :key="index">
			<view>{{questionItem.question}}</view>
			<view>{{questionItem.example}}</view>
			<textarea v-model="questionItem.answer" rows="3" placeholder="请输入答案"></textarea>
			<!-- <p v-if="questionItem.questionDesc">{{ questionItem.questionDesc }}</p> -->
		</view>
	</view>
</template>

<script>
	import questionnaireData from '@/assets/value.json'; // 假设 JSON 文件在 src/assets 目录下
	export default {
		data() {
			return {
				questionnaire: []
			}
		},
		onReady() {
			this.questionnaire = questionnaireData
			console.log(questionnaireData, this.questionnaire)
		},
		methods: {

		}
	}
</script>

<style scoped>
	/* 添加你的样式 */
</style>