<template>
	<view class="task">
		<u-swiper :list="list"></u-swiper>
		<!-- 		<img style="width: 100%;margin-top: 20px;" src="https://shegnqx.oss-cn-beijing.aliyuncs.com/20200903/ff3931c6710144dabf814360ff34b4f3.png" >
 -->
		<view class="order-view">
			<view class="order-view-view" @click="getType(5)">
				<image src="../../static/task/fabu.png" class="order-view-image"></image>
				<view class="order-view-text" style="margin-left:0px">五元区</view>
			</view>
			<view class="order-view-view" @click="getType(10)">
				<image src="../../static/task/paidan.png" class="order-view-image"></image>
				<view class="order-view-text" style="margin-left:0px">十元区</view>
			</view>
			<view class="order-view-view" @click="getType(15)">
				<image src="../../static/task/shenhe.png" class="order-view-image"></image>
				<view class="order-view-text" style="margin-left:0px">十五元区</view>
			</view>
			<view class="order-view-view" >
				<image src="../../static/task/weiquan.png" class="order-view-image"></image>
				<view class="order-view-text" style="margin-left:0px">游戏试玩</view>
			</view>
			<view class="order-view-view" @tap="unionLogin">
				<a :href="url"><image src="../../static/task/fabu.png" class="order-view-image"></image>
				<view class="order-view-text" style="margin-left:0px">赏金榜</view></a>
				
			</view>
		</view>

		<view style="width: 94%;margin: 0 auto;">
			<u-subsection :list="navlist" :current="curNow" @change="sectionChange" active-color="#ff9900"></u-subsection>
			<view style="margin: 150px;" v-if='taskList.length<1'>
				<u-empty text="暂无数据" mode="list"></u-empty>
			</view>
		</view>
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showLoading:true,
				busy:false,
				pageInfo:{
					count:0,
					pageIndex:1,
					pageSize:10
				},
				ishave:false,
				list: [{
						image: 'https://shegnqx.oss-cn-beijing.aliyuncs.com/20200804/47ba8f7ed92a4cc79ae5d514cd61f8d4.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://shegnqx.oss-cn-beijing.aliyuncs.com/20200804/2b33cfd09af84c3ca4aedbde6af7d469.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://shegnqx.oss-cn-beijing.aliyuncs.com/20200804/3744a33244674a8e8ad5834ca1f82f7b.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				taskList: [],
				navlist: [{
						name: '全部任务'
					},
					{
						name: '最新任务'
					},
				],
				curNow: 0,
				url:'',
			};
		},
		onShow() {

		},
		onLoad: function(options) {
			this.toList();
			this.union();
			this.ishave = false
		},
		onReachBottom() {
			// console.log('我低了')
			// console.log(this.pageInfo.pageIndex)
			this.$Request.postT("/externalApi/taskList", {
				page: this.pageInfo.pageIndex + 1,
				size: this.pageInfo.pageSize,
				price: ''
			}).then(res => {
				if(res.data.length != 0){
					this.taskList = this.taskList.concat(res.data);
					this.pageInfo.pageIndex = this.pageInfo.pageIndex + 1
				}else{
					this.ishave = true
				}
			});
		},
		methods: {
			union(){
				var id = this.$Raichu.getData('uid');
				if(id){
				this.$Request.postT("/externalApi/unionLogin", {
					userId: id,
				}).then(res => {
					this.url = res;
				});
				}else{
					  this.$Raichu.reLaunch('/pages/login/index');
				}
			},
			sectionChange(index) {
				this.curNow = index;
				if (index == 1) {
					this.toNew();
				} else {
					this.toList();
				}
			},
			getType(type){
				uni.navigateTo({
					url: '/pages/task/type?type=' + type
				});
			},
			toList() {
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/taskList", {
					userId:id,
					page: this.pageInfo.pageIndex,
					size: this.pageInfo.pageSize,
					price: ''
				}).then(res => {
					this.taskList = res.data;
				});
			},
			toNew() {
				this.$Request.postT("/externalApi/taskNewList", {
					page: 1,
					size: 100,
					price: ''
				}).then(res => {
					this.taskList = res.data;
				});
			},
			taskItem(id) {
				uni.navigateTo({
					url: '/pages/task/detail?id=' + id
				});
			},
			unionLogin(){
				var id = this.$Raichu.getData('uid');
				if(id){
					uni.navigateTo({
					    url: '/pages/index/unionLogin'
					});
				}else{
					uni.showModal({
					    title: '提示',
					    content: '您还未登陆，是否跳转登陆',
					    success: function (res) {
					        if (res.confirm) {
					            this.$Raichu.reLaunch('/pages/login/index');
					        } else if (res.cancel) {
					          
					        }
					    }
					});
				}
		
				// this.$Raichu.showModal('提示','请登陆')
				// if(!id){
				// 	this.$Raichu.reLaunch('/pages/login/index');
				// }
				// this.$Request.postT("/Api/unionLogin", {
				// 	page: 1,
				// 	size: 100,
				// 	price: ''
				// }).then(res => {
				// 	this.taskList = res.data;
				
				// });
			}
		},
	};
</script>

<style lang="less" scoped>
	a:link ,a:visited,a:hover,a:active { text-decoration: none;}
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
