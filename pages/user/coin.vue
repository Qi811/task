<template>
	<view class="task">

		<view class="task-content">

			<view class="task-list" v-for="(item, index) in list" :key="index" >
				<view style="width:80%;margin-left: 20upx;">
					<view style="display: flex; flex-direction: row;">
						<view style="width: 60%; flex-wrap: wrap;">{{item.remark}}</view>
						
					</view>
					<view style="font-size:26upx;margin-top:10upx;display: flex; color: #999999;">
						<image src="../../static/img/task/taskmoney.png" style="margin-top: 10upx;height: 20upx;width: 20upx;"></image>
						<view style="width: 56%;margin-left: 10upx;">{{item.price}}元</view>
						<view style=" display: flex; flex-direction: row;">
						
							<view style="color: red; margin-top: 5upx;margin-left: 10upx;">{{item.create_time}}</view>
						</view>
					</view>
				</view>
			</view>
			<view style="margin: 100px;">
				<u-empty text="暂无数据" mode="data" v-if="list.length<1" ></u-empty>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
				list: [],
							
			};
		},
	
		onLoad: function(options) {
		
			this.toList();
			
		},
		methods: {
		
			toList() {
					var uid = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/incomeInfo", {
					id: uid,
					size: 100,
					page: 1
				}).then(res => {
					this.list = res.data;

				});
			},
			
			
		},
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
