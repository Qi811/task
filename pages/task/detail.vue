<template>
	<view class="newTask">
		<!-- 第一部分 -->
		<view style="box-shadow: rgba(183, 183, 183, 0.3) 1px 1px 10px 1px;border-radius: 20upx;display: flex; flex-direction: column;background-color: #fff;padding: 20upx 0upx 30upx 20upx; margin: 20upx 20upx 20upx 20upx;">
			<view style="width: 95%;display: flex;">
				<image src="https://shegnqx.oss-cn-beijing.aliyuncs.com/20200904/d61b903a5eb24991b9f662433a9059d1.png" style="margin-left: 20upx;border-radius: 100upx;width: 100upx;height: 100upx;background-size: 100%;"></image>
				<view style="width:60%;margin-left: 20upx;">
					<view style="color: #000000; font-weight: bold;">{{data.title}}</view>
					<view style="font-size:26upx;margin-right: 30upx;margin-top:10upx;color: #666666;">ID:{{data.id}}</view>
				</view>
				<view style="width: 20%;color:#ff5300;font-size: 36upx;font-weight: 600;">¥{{data.price}}</view>
			</view>
			<view style="display: flex;flex-direction: row;padding-top: 30upx;">
				<view class="titile2-text" style="width: 80%; color: #666666;">发布时间 {{$u.timeFormat(data.createTime,'yyyy-mm-dd')}}</view>
				<view v-if="status == 4" style="width: 150upx;color: #999999;font-size:26upx;margin-top:5upx;">待审核</view>
				<view v-if="status == 1" style="color: #999999;font-size:26upx;margin-top:5upx;">已接单</view>
				<view v-if="status == 5" style="color: green;font-size:26upx;margin-top:5upx;">已通过</view>
				<view v-if="status == 2" style="color: red;font-size:26upx;margin-top:5upx;">已放弃</view>
				<view v-if="status == 3" style="color: red;font-size:26upx;margin-top:5upx;">已拒绝</view>
			</view>
		</view>

	
		<!-- 第二部分 -->
		<view class="titile2" style="box-shadow: rgba(183, 183, 183, 0.3) 1px 1px 10px 1px;border-radius: 20upx;margin: 0upx 20upx 20upx 20upx; padding: 0upx 20upx 20upx 20upx; background: #FFFFFF;">
			<view style="color: #000000; font-weight: bold; font-size: 36upx; padding: 20upx 0 10upx 10upx;">任务详情:</view>
			<view class="titile2-group">
				<view class="titile2-text">任务数量</view>
				<view class="titile2-text1">{{data.applyNum}}人已做，总共{{data.maxNum}}个</view>
			</view>

			<view class="titile2-group">
				<view class="titile2-text">任务限时</view>
				<view class="titile2-text1">{{$u.timeFormat(data.endTime,'yyyy-mm-dd')}}</view>
			</view>
			<view class="titile2-group">
				<view class="titile2-text">说明:</view>
			</view>
			<view class="u-content">
				<u-parse :html="data.content"></u-parse>
			</view>
			
		</view>
		<view class="titile2" v-if="status==1" style="box-shadow: rgba(183, 183, 183, 0.3) 1px 1px 10px 1px;border-radius: 20upx;margin: 0upx 20upx 20upx 20upx; padding: 0upx 20upx 20upx 20upx; background: #FFFFFF;">
			<view style="color: #000000; font-weight: bold; font-size: 36upx; padding: 20upx 0 10upx 10upx;">任务提交:</view>
			<u-upload ref="uUpload" :action="action" :auto-upload="true"></u-upload>			
			<view style="color: #000000; font-weight: bold; font-size: 36upx;padding: 20upx 0 10upx 10upx;">备注:</view>
			<input type="text" v-model="textvalue" style="border: 1upx solid #BFC2C3;background-color: #F4F5F6;width: 500upx;height: 45upx; padding: 6upx 10upx 6upx 10upx;margin-left: 10upx;">
		<!-- <u-button @click="submit" type="success">提交</u-button> -->
			
		</view>
	<!-- 第三部分 -->

		<view class="tui-btn-box" v-if="status==0">
			<button class="tui-button-primary" hover-class="tui-button-hover" formType="submit" type="primary" style="color: #FFFFFF;background: #e62430;"
			 @click="saveHelpTask">
				报名活动
			</button>
		</view>

		<view style="display: flex; flex-direction: row; margin-top: 20upx;" v-if="status==1">
			<button style="width: 49%;" type="default" @click="out">放弃任务</button>
			<button style="width: 49%;" type="warn" @click="submit">提交任务</button>
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				data: '',
				status: '',
				action: 'http://47.99.210.93:8080/externalApi/upload',
				fileList: [],
				textvalue:''
			};
		},
		onLoad(params) {
			this.id = params.id;
			this.detail(this.id);
		},
		methods: {
			detail(id) {
				var uid = this.$Raichu.getData('uid');
				if(uid){
					this.$Request.postT("/externalApi/taskDetails", {
						taskID: id,
						userId: uid
					}).then(res => {
						this.data = res.data;
						this.status = res.statusInfo;
					
					});
				}else{
					  this.$Raichu.reLaunch('/pages/login/index');
				}
				
			},
			saveHelpTask() {
				var uid = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/taskGain", {
					id: uid,
					taskId: this.id,
				}).then(res => {
					if (res.code == 0) {
	                  this.$refs.uToast.show({
							title: '领取成功',
							type: 'success',
									
						})

						this.detail(this.id);
					} else {
						this.$refs.uToast.show({
							title: '领取失败',
							type: 'error',

						})
					}


				});
			},
			submit() {
				var uid = this.$Raichu.getData('uid');
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
			
				if(list.length == 0){
					this.$Raichu.showToast("请上传图片");
				}else{
					this.$Request.postT("/externalApi/taskSubmit", {
						id: this.id,
						file: list,
						userId:uid,
						userInfo:this.textvalue
					}).then(res => {
						if (res.code == 0) {
							this.$refs.uToast.show({
								title: '提交成功',
								type: 'success',
							})
							this.detail(this.id);
							localStorage.setItem('detailid',this.id)
						} else {
							this.$refs.uToast.show({
								title: '提交失败',
								type: 'error',
							})
						}
					});
				}
			
			},
			save() {
				uni.navigateTo({
					url: '/pages/task/apply?task_id=' + this.id
				});
			},
			out() {
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/taskAbandon", {
					id:this.id,
					userId:id
				}).then(res => {
					if (res.code == 0) {
						uni.showModal({
							title: '提示',
							content: '已放弃任务',
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
							title: '操作失败',
							type: 'error',
						})
					}
				});
			}
		}
	};
</script>

<style lang="less" scoped>
	page {
		background-color: #FFFFFF;
	}

	.upload {
		background-color: #ffffff;
		padding: 10upx;

		.upload-image {
			height: 40upx;
			width: 50upx;
			margin-top: 10upx;
			margin-left: 10upx;
		}

		.upload-text {
			font-size: 34upx;
			color: #000000;
			margin-left: 10upx;
		}
	}

	.tui-btn-box {
		padding: 40rpx 50rpx;
		box-sizing: border-box;
	}

	.header {
		height: 88upx;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding-top: 13%;

		.header-title {
			width: calc(100% - 72upx);
			text-align: center;
			color: #0f1930;
			font-size: 32upx;
			font-weight: bold;
		}

		.detail {
			font-size: 32rpx;
			width: 104rpx;
		}
	}

	.newTask {
		background: #FFFFFF;

		.titile1 {
			background-color: #ffffff;
			padding: 3%;
			display: flex;
			flex-direction: row;
			padding-top: 60upx;
			width: 100%;
		}

		.titile1-image {
			height: 100upx;
			width: 100upx;
		}

		.titile1-group1 {
			margin-left: 20upx;
			width: 200upx;

			.titile-group1-text1 {
				font-size: 30upx;
				font-weight: bold;
				margin-top: 10upx;
			}

			.titile-group1-text2 {
				font-size: 24upx;
				color: #7a7a7a;
				justify-content: right;
				margin-top: 20upx;
			}
		}

		.titile2-group {
			display: flex;
			flex-direction: range(start, end, step);
			font-size: 28upx;
			padding: 2%;
			margin-top: 1upx;
			margin-top: 1upx;
			background-color: #ffffff;
		}

		.titile2-text {
			color: #7a7a7a;
			font-size: 28upx;
		}

		.titile2-text1 {
			margin-left: 40upx;
			color: #000000;
			font-size: 28upx;
		}

		.titile2-text3 {
			margin-left: 95upx;
			flex-wrap: wrap;
		}

		.titile2-group2 {
			padding-top: 20upx;
			padding-bottom: 20upx;
		}

		.confirm-btn {
			width: 300upx;
			height: 60upx;
			line-height: 60upx;
			border-radius: 30px;
			background-color: #34c9f5;
			color: #fff;
			font-size: 28upx;
		}
	}
</style>
