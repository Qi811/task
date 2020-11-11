<template>
	<view class="task">

		<view class="task-content">

			<view class="task-list" v-for="(item, index) in taskList" :key="index" @click="taskItem(item.id)">
				<image src="https://shegnqx.oss-cn-beijing.aliyuncs.com/20200904/d61b903a5eb24991b9f662433a9059d1.png" style="margin-left: 20upx;border-radius: 100upx;width: 100upx;height: 100upx;background-size: 100%;"></image>
				<view style="width:80%;margin-left: 20upx;">
					<view style="display: flex; flex-direction: row;">
						<view style="width: 60%; flex-wrap: wrap;">{{item.title}}</view>
						<view style="width:40%;margin-left: 10upx;height: 50upx;display: block;text-align: center;background: #e4533d;border-radius: 100upx;">
							<view style="color: #FFFFFF; margin-top: 5upx; font-size: 24upx;text-align: center;">做任务</view>
						</view>
					</view>
					<view style="font-size:26upx;margin-top:10upx;display: flex; color: #999999;">
						<image src="../../static/img/task/taskmoney.png" style="margin-top: 10upx;height: 20upx;width: 20upx;"></image>
						<view style="width: 56%;margin-left: 10upx;">+{{item.price}}元</view>
						<view style=" display: flex; flex-direction: row;">
							已完成
							<view style="color: red; margin-top: 5upx;margin-left: 10upx;">{{item.apply_num}}/{{item.max_num}}</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="ishave" style="text-align: center;margin: 10px;color: #BCBEC2;">
				没有更多任务了
			</view>
			<view style="margin: 100px;">
				<u-empty text="暂无数据" mode="data" v-if="taskList.length<1" ></u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				taskList: [],
				type:'',
				pageInfo:{
					count:0,
					pageIndex:1,
					pageSize:10
				},
				ishave:false
			};
		},
		onLoad: function(options) {
			this.type = options.type;
			// console.log(this.type)
			this.toList();
			this.ishave = false
		},
		methods: {
			toList() {
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/taskList", {
					userId:id,
					page: this.pageInfo.pageIndex,
					size: this.pageInfo.pageSize,
					price: this.type
				}).then(res => {
					this.taskList = res.data;
				});
			},
			taskItem(id){
				uni.navigateTo({
					url:'/pages/task/detail?id='+id
				})
			}
		},
		onReachBottom() {
			var id = this.$Raichu.getData('uid');
			this.$Request.postT("/externalApi/taskList", {
				userId:id,
				page: this.pageInfo.pageIndex + 1,
				size: this.pageInfo.pageSize,
				price: this.type
			}).then(res => {
				if(res.data.length != 0){
					this.taskList = this.taskList.concat(res.data);
					this.pageInfo.pageIndex = this.pageInfo.pageIndex + 1
				}else{
					this.ishave = true
				}
			});
		}
	};
</script>

<style lang="less" scoped>
	page {
		background-color: #ffffff;
	}

	.order-view {
		display: flex;
		flex-direction: row;
		height: 160upx;
		padding-left: 30upx;
		margin: 20upx;
		box-shadow: rgba(183, 183, 183, 0.3) 1px 1px 10px 1px;
		width: 95%;
		border-radius: 20upx;
	}

	.order-view-image {
		width: 70upx;
		height: 70upx;
	}

	.order-view-view {
		text-align: center;
		padding: 20upx 30upx 40upx 10upx;
		width: 180upx;
	}

	.order-view-text {
		color: #000000;
		font-size: 24upx;
		margin-top: 10upx;
		margin-left: 8upx;
	}

	.task-list {
		width: 94%;
		display: flex;
		margin: 10px auto;
		padding: 10px;
		box-shadow: rgba(183, 183, 183, 0.3) 1px 0px 10px 0px;
	}
</style>
