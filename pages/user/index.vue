<template>
	<view class="content" style="color: #F2F2F2;">
		<view class="view1" style="width: 100%; height: 340upx;">
			<view class="login-view" style="display: flex;flex-direction: row;padding-top: 120upx;">
				<image src="/static/img/common/head.png" style="border-radius: 100upx;width: 100upx;height: 100upx;margin-left: 30upx;"></image>
				<view class="login-view-text1" style="margin-left: 30upx;">
					<view style="color: #FFFFFF;">{{user.username}}</view>
					<view style="color: #FFFFFF; font-size: 12px;margin-top: 10upx;">ID:{{user.id}}</view>
					<view style="display: flex;">							
						<view style="margin-top: 12upx;"> {{user.levelName}} </view>
						<!-- <view style="width: 500upx;height: 20upx;background-color: rgb(95,95,95);margin-top: 10px;border-radius: 20upx;margin-left: 20upx;">
							<view :style="{'width': width + 'upx'}" style="height: 20upx; background-color: #FFFFFF; border-radius: 20upx;"></view>
						</view> -->
					</view>
				</view>
				<view class="vip-card-box">

				<!-- 	<view class="b-btn">
						立即开通
					</view> -->
					<view class="tit">
						<text class="yticon icon-iLinkapp-"></text> <span> </span>
					</view>
				</view>
				<image class="arc" src="../../static/arc.png"></image>
			</view>


			<view class="order-view" style="margin-top: 60px ; margin-left: 2vw;">

				<view class="order-view-view">
					<view class="order-view-text" style="font-size: 1rem;"> {{user.price}}</view>
					<view class="order-view-text" style="color: grey;">现金金额</view>
				</view>
				<view class="order-view-view"> 
					<view class="order-view-text" style="font-size: 1rem;"> {{user.total_price}}</view>
					<view class="order-view-text" style="color: grey;">总计金额</view>
				</view>
			</view>
			<view class="order-view" style="margin-top: 10px ; margin-left: 2vw;">
				<view class="order-view-view" @tap="goMyTask">
					<image src="../../static/img/my/test.png" class="order-view-image"></image>
					<view class="order-view-text">我的任务</view>
				</view>
				<view class="order-view-view" @tap="coin">
					<image src="../../static/img/my/money.png" class="order-view-image"></image>
					<view class="order-view-text">资金记录</view>
				</view>
				<!-- 	<view class="order-view-view" @tap="goRights">
					<image src="../../static/img/my/myright.png" class="order-view-image"></image>
					<view class="order-view-text">我的维权</view>
				</view> -->
				<view class="order-view-view" @tap="cash">
					<image src="../../static/img/my/cash.png" class="order-view-image"></image>
					<view class="order-view-text">余额提现</view>
				</view>
			</view>
		</view>
		<view style="clear: both;margin: 180px auto;width: 96%;">
			<u-cell-group>

				<u-cell-item icon="question-circle-fill" title="新手教程" @tap="teach"></u-cell-item>
				<u-cell-item icon="lock-fill" title="修改密码" @tap="upass"></u-cell-item>
				<u-cell-item icon="phone-fill" title="商务合作" @tap="cooperation"></u-cell-item>
				<u-cell-item icon="setting" title="退出登陆" @click="loginout"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>
<script>
	export default {

		data() {
			return {
				user: '',
				width: 300,
			};
		},
		onShow() {

		},
		onLoad: function(options) {
			var id = this.$Raichu.getData('uid');
			if(id){
				this.userInfo();
			}else{
				  this.$Raichu.reLaunch('/pages/login/index');
			}
			
		},
		methods: {
			userInfo() {
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/userInfo", {
					id: id,
				}).then(res => {
					this.user = res;
				});
			},
			goMyTask(){
				uni.navigateTo({
				    url: '/pages/order/index'
				});
			},
			upass(){
				uni.navigateTo({
				    url: '/pages/user/upass'
				});
			},
			cooperation(){
				uni.navigateTo({
				    url: '/pages/user/cooperation'
				});
			},
			teach(){
				uni.navigateTo({
				    url: '/pages/user/teach'
				});
			},
			coin(){
				uni.navigateTo({
				    url: '/pages/user/coin'
				});
			},
			cash(){
				uni.navigateTo({
				    url: '/pages/user/cash'
				});
			},
			loginout(){
				uni.showModal({
				    title: '提示',
				    content: '是否确认退出登陆',
				    success: function (res) {
				        if (res.confirm) {
				  
				
						 uni.removeStorageSync('uid');
				     
						 uni.reLaunch({
						 	url: '/pages/login/index'
						 });
				        } else if (res.cancel) {
				          
				        }
				    }
				});
				
			}
		
		}
	};
</script>

<style>
	.order-view {
		width: 96%;

		display: flex;
		justify-content: space-around;
		flex-direction: row;
		background-color: #ffffff;
		height: 160upx;

		/* 		border-top-left-radius: 40upx;
		border-top-right-radius: 40upx; */
		padding-left: 30upx;
	}

	.order-view-image {
		width: 50upx;
		height: 50upx;
	}

	.order-view-view {
		text-align: center;
		padding: 40upx 30upx 40upx 10upx;
		/* width: 180upx; */
	}

	.order-view-text {
		color: #000000;
		font-size: 12px;
		margin-top: 10upx;
		margin-left: 8upx;
	}

	.vip-card-box {

		display: flex;
		flex-direction: column;
		color: #f7d680;
		background: url('../../static/vip-card.png');
		background-size: 100% 100%;
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 250upx;
		width: 96%;
		height: 100upx;
		padding: 20upx 24upx;
		margin-left: 2vw;
	}

	.b-btn {
		position: absolute;
		right: 20upx;
		top: 20upx;
		width: 132upx;
		height: 40upx;
		text-align: center;
		line-height: 40upx;
		font-size: 22upx;
		color: #36343c;
		border-radius: 20px;
		background: linear-gradient(left, #f9e6af, #ffd465);
		z-index: 1;
	}

	.tit {
		font-size: $font-base+2upx;
		color: #f7d680;
		margin-bottom: 28upx;

	}

	.arc {
		position: absolute;
		left: 0;
		top: 320upx;
		width: 100%;
		height: 36upx;
	}

	.yticon {
		color: #f6e5a3;
		margin: 016upx;
	}

	.e-b {
		font-size: $font-sm;
		color: #d8cba9;
		margin-top: 10upx;
	}

	.view2-view {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 85upx;
		align-items: center;
	}

	.view2-view1 {
		display: flex;
		flex-direction: row;
		width: 90%;
		align-items: center;
	}

	.view2-view-image {
		margin-left: 40upx;
		width: 30upx;
		height: 30upx;
	}

	.view2-view-text {
		font-size: 14px;
		color: #000000;
		margin-left: 20upx;
		width: 80%;
	}

	.view2-view-image-right {
		width: 18upx;
		height: 20upx;
		margin-left: 50upx;
	}
	.view1{
		background: url(../../static/img/my/backgroudred.png);
	}
</style>
