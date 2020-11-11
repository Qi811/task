<template>
	<view class="cash">
		<view class="one" style="background-size: 100%;height: 400upx;">
			<view style="font-size: 16px;color: #FFFFFF;padding-top: 100upx;">可提现总额</view>
			<view style="font-size: 29px;color: #FFFFFF;padding-top: 20upx;">¥ {{user.price}}</view>

			<view style="width: 90%;height: max-content;margin-left: 40upx;background-color: #FFFFFF;box-shadow: rgba(183, 183, 183, 0.3) 0px 1px 10px;margin-top: 50upx;border-radius: 20upx;">
				<view style="display: flex;flex-direction: row;padding: 20upx;">
					<view style="font-size: 16px;color: #333333;">提现金额</view>
					<view style="font-size: 11px;color: #333333;margin-left: 20upx;margin-top: 10upx;">提现最低额度10元</view>
				</view>
				<view style="display: flex;flex-direction: row;padding: 20upx;">
					<view style="font-size: 14px;color: #333333;">¥</view>
					<input type="text" v-model="money" placeholder="请输入金额" style="font-size: 14px;color: #333333;text-align: left;margin-left: 10upx;" />
				</view>
				<view style="background: #E6E6E6;width: 100%;height: 1upx;"></view>

			</view>
			<view style="width: 90%;height: max-content;margin-left: 40upx;background-color: #FFFFFF;box-shadow: rgba(183, 183, 183, 0.3) 0px 1px 10px;margin-top: 50upx;border-radius: 20upx;">
				<view style="display: flex;flex-direction: row;padding: 20upx;">
					<view style="font-size: 16px;color: #333333;">备注：</view>
				</view>
				<view style="display: flex;flex-direction: row;padding: 20upx;">

					<u-input v-model="content" type="textarea" height="150" />
				</view>
				<view style="background: #E6E6E6;width: 100%;height: 1upx;"></view>

			</view>
			<view @click="getCash" style="margin: 32upx;font-size: 18px;background: #e64340;color: white;border-radius: 10px;height: 40px;line-height: 40px">
				提现
			</view>

			<view style="display: flex;width: 100%;justify-content: center;">
				<view style="color: grey;padding-bottom: 30px;padding-top: 20upx;" @click="cashInfo">提现账号设置</view>
			</view>
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
				money: '',
				content: '',
				user: '',
				bankNumber:''
			};
		},
		onLoad: function(options) {

			this.userInfo();

		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/user/cashList'
			});
		},
		methods: {
            cashInfo() {
				uni.navigateTo({
					url: '/pages/user/cashInfo'
				});
			},
			
			userInfo() {
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/userInfo", {
					id: id,

				}).then(res => {
					console.log(res)
					this.user = res;
					this.bankNumber=res.bank_number;
				});
			},
			getCash() {
				if (!this.bankNumber) {
					this.$Raichu.showToast("请先设置提现账号");
				}else{
					var uid = this.$Raichu.getData('uid');
					this.$Request.postT("/externalApi/tiXianSubmit", {
						member_id: uid,
						price: this.money,
						admin_remark: this.content
					}).then(res => {
						if (res.code == 0) {
					
							uni.showModal({
								title: '提示',
								content: '提现成功',
								showCancel: false,
								success: function(res) {
					
									if (res.confirm) {
					
									}
								}
							});
							this.userInfo();
					
					
						} else {
					// 		this.$refs.uToast.show({
					// 			title: res.message,
					// 			type: 'error',
					
					// 		})
							this.$Raichu.showToast("提现失败");
						}
					
					});
				}
	

			}


		}
	};
</script>

<style lang="less">
	.view2-view-text {
		font-size: 14px;
		color: #000000;
		margin-left: 20upx;
		width: 80%;
	}
	
	.one{
		background-image: url(../../static/img/my/cashbackground.png);
	}

	.view2-view-image-right {
		width: 18upx;
		height: 30upx;
		margin-left: 50upx;
	}

	.cash {
		text-align: center;
		background: white;
		height: 100%;
		position: absolute;
		width: 100%;

		.cash-top {
			padding: 32upx 32upx 50upx 32upx;
			/* border-bottom: 1px solid gainsboro; */
			background: #e10a07;
		}

		.leiji {
			font-size: 14px;
			color: #ffffff;
			margin-bottom: 10px;
		}
	}
</style>
