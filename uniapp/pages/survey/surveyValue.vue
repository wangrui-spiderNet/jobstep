<template>
	<div>
		<h1>{{ questionnaire.name }}</h1>
		<p>{{ questionnaire.description }}</p>
		<div v-for="(questionItem, index) in questionnaire.questionAndAnswerList" :key="index">
			<h3>{{ questionItem.question }}</h3>
			<textarea v-model="questionItem.answer" rows="3" placeholder="请输入答案"></textarea>
			<p v-if="questionItem.questionDesc">{{ questionItem.questionDesc }}</p>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue';

	import questionnaireData from '@/assets/value.json'; // 假设 JSON 文件在 src/assets 目录下  

	console.log(questionnaireData)

	// name: 'Questionnaire',

	const questionnaire = ref(questionnaireData);
	console.log("价值观:"+questionnaire)
</script>

<style scoped>
	/* 添加你的样式 */
</style>