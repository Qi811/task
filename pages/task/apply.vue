<template>
	<view>
		<view style="line-height: 40px;">
			<p>任务名称：{{data.title}}</p>
			<u-line color="info"></u-line>
			<p>任务赏金：{{data.price}}</p>
		</view>
		<u-line color="info"></u-line>
		<p> 任务内容：</p>
		<u-upload ref="uUpload" :action="action" :auto-upload="true"></u-upload>
		<u-button @click="submit" type="success">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 非真实地址
				action: '',
				fileList: [],
				id: '',
				data: ''
			}
		},
		onLoad(params) {
			this.id = params.task_id;
			this.action = 'http://47.99.210.93:8080/externalApi/upload';
			this.detail();
		},
		methods: {
			detail() {
				var uid = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/taskDetails", {
					taskID: this.id,
					userId: uid
				}).then(res => {
					this.data = res.data;


				});
			},
			submit() {
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				var list = [];
				files.forEach(function(item, index) {
					list[index] = item.response.data;

					//item 就是当日按循环到的对象
					//index是循环的索引，从0开始
				})

				this.$Request.postT("/externalApi/taskSubmit", {
					id: this.id,
					file: list,

				}).then(res => {

					if (res.code == 0) {
						uni.showModal({
							title: '提示',
							content: '提交成功',
							showCancel: false,
							success: function(res) {

								if (res.confirm) {
									uni.reLaunch({
										url: '/pages/index/index'
									});
								}
							}
						});
					} else {
						this.$refs.uToast.show({
							title: '提交失败',
							type: 'error',

						})
					}
				});

			},
		}
	}
</script>
<style>
</style>
