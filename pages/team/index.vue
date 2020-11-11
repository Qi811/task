<template>
	<view class="content">
		<view class="top"></view>
		<view class="banner">
			<dl>
				<dt>
					<image src="../../static/img/logo.png" mode=""></image>
				</dt>
				<dd>任务</dd>
			</dl>
			<view class="order-view" style=" margin-left: 2vw;">

				<!-- <view class="order-view-view">
					<view style="font-size: 1rem;text-align: center;">0.00</view>
					<view style="color: grey;">已获得奖励</view>
				</view> -->
				<view class="order-view-view" style="margin-top: 10px;margin-right: 12px;">
					<view style="font-size: 1rem;text-align: center;">{{number}}</view>
					<view style="color: grey;">邀请好友</view>
				</view>

			</view>
			<view style="margin: 20px auto; text-align: center;">
				<u-button type="error" size="medium " @click="lower">查看好友</u-button>
			</view>

			<view class="img">
			<image :src="src" mode=""></image>
	     	</view>
			<!-- <view class="img">
				<canvas canvas-id="couponQrcode"></canvas>
			</view> -->
			<view class="tgtit">推广链接：<text class="tugurl">{{url}}</text></view>
			<view class="sharbuttn">
					<view class="btn" @click="save">保存二维码</view>
				<view class="btn" @click="copyText">复制推广链接</view>
			</view>

		</view>

	</view>
</template>

<script>
	const qrCode = require('../../static/weapp-qrcode.js')
	export default {
		data() {
			return {
				uid: this.$Raichu.getData('uid'),
				url: '',
				number: 0,
				src:""
			}
		},
		onLoad() {
			var uid = this.$Raichu.getData('uid');
			if (uid) {
				// setTimeout(() => {
				// 	this.couponQrCode()
				// }, 500);
				this.inviteNum();
				this.shareInfo();
			} else {
				this.$Raichu.reLaunch('/pages/login/index');
			}
		},
		methods: {
			couponQrCode() {
				new qrCode('couponQrcode', {
					text: this.url,
					width: 150,
					height: 150,
					showLoading: true, // 是否显示loading
					loadingText: '二维码生成中', // loading文字
					colorDark: "#333333",
					colorLight: "#FFFFFF",
					correctLevel: qrCode.CorrectLevel.H
				})
			},
			lower() {
				uni.navigateTo({
					url: '/pages/team/lower'
				});
			},
			inviteNum() {
				var uid = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/inviteNum", {
					id: uid,
				}).then(res => {
					this.number = res.number;
					

				});
			},
			shareInfo() {
				var uid = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/shareInfo", {
					userId: uid,
				}).then(res => {
					this.url = res.url;
					this.src = res.data;
					

				});
			},
			copyText() {
				// #ifdef H5
				this.$copyText(this.url).then(
					res => {
						uni.showToast({
							title: '复制成功'
						})
					}
				)
				// #endif
				// #ifndef H5
				uni.setClipboardData({
					data: this.url,
					success: () => {
						uni.showToast({
							title: '复制成功'
						})
					}
				})
				// #endif
			},


			//保存图片到相册
			save() {
		

				uni.showActionSheet({
					itemList: ['保存图片到相册'],
					success: () => {
						let that = this;
						uni.saveImageToPhotosAlbum({
							filePath: that.src,
							success(res) {
								that.$Raichu.showToast('保存成功');
							}
						});
						
					
						// plus.gallery.save(this.data, function() {
						// 	uni.showToast({
						// 		title: '保存成功',
						// 		icon: 'none'
						// 	})
						// }, function() {
						// 	uni.showToast({
						// 		title: '保存失败，请重试！',
						// 		icon: 'none'
						// 	})
						// });
					}
				})
			},
			share(e) {
				if (this.providerList.length === 0) {
					uni.showModal({
						title: '当前环境无分享渠道!',
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function(value) {
					return value.name
				})

				console.log(itemList)

				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						console.log(this.providerList[res.tapIndex].id)
						if (this.providerList[res.tapIndex].id == 'qq') {
							this.type = 1
						} else {
							this.type = 0
						}
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ?
								'WXSenceTimeline' : "WXSceneSession",
							type: this.type,
							title: '耘助教',
							summary: '耘助教是一个在线教育应用平台',
							imageUrl: 'http://pds.jyt123.com/wxtest/logo.png',
							href: "https://m3w.cn/uniapp",
							success: (res) => {
								console.log("success:" + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel: false
								})
							}
						});
					}
				})




			},
			openLink() {
				plus.runtime.openWeb(this.sourceLink)
			}
		}
	}
</script>

<style>
	.order-view {
		width: 96%;

		display: flex;
		justify-content: space-around;
		flex-direction: row;
		background-color: #ffffff;


		/* 		border-top-left-radius: 40upx;
		border-top-right-radius: 40upx; */
		padding-left: 30upx;
	}

	.tugurl {
		color: #999;
	}

	.sharbuttn {
		display: flex;
		justify-content: center;
		padding-bottom: 50px;
	}

	.shartitle {
		width: 80%;
		text-align: center;
		margin-left: 10%;
		border-bottom: 1px solid #dddddd;
		position: relative;
		height: 60upx;

	}

	.tgtit {
		margin-top: 10px;
		text-align: center;
	}

	.shartitle view {
		height: 50upx;
		line-height: 50upx;
		font-size: 28upx;
		color: #999;
		width: 120upx;
		margin: 32upx auto;
		position: absolute;
		background: #fff;
		left: 50%;
		margin-left: -60upx;
	}

	.sharapk {
		display: flex;
		justify-content: center;
		margin: 20upx auto
	}

	.sharapk view {
		margin: 40upx;
	}

	.sharapk view image {
		height: 80upx;
		width: 80upx;
	}

	.content {
		width: 100%;
		background-color: #ffffff;
	}

	.top {
		width: 100%;
		height: 300upx;
		background: url('http://renwu.xiansqx.com/static/img/backgroud.d7a2c38d.png') no-repeat;
		background-size: 100%;
		background-position: center center;
	}

	.banner {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 60upx 60upx 0 0;
		margin-top: -60upx;
	}

	.banner dl {
		margin-top: -80upx;
	}

	.banner dl dt {
		text-align: center;
	}

	.banner dl dt image {
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
	}

	.banner dl dd {
		text-align: center;
	}

	.img {
		width: 300upx;
		height: 300upx;

		margin: 0 auto;
		margin-top: 60upx;
	}

	.img image {
		width: 100%;
		height: 100%;
	}

	.btn {
		width: 260upx;
		height: 60upx;
		line-height: 60upx;
		margin: 0 auto;
		margin-top: 60upx;
		border-radius: 40upx;
		border: 0;
		font-size: 26upx;
		outline: 0;
		/* 	background: #33b17b; */
		background: #fa3434;
		color: #FFFFFF;
		text-align: center;
	}

	.bottom {
		width: 100%;
		height: 400upx;
		/* 	background: url(../../static/img/beij.png) no-repeat; */
		background-position: left bottom;
		/* 设置背景图片位置 */
		background-size: 20%;
	}

	.bottom ul {
		padding-left: 40upx;
		box-sizing: border-box;
	}

	.bottom ul li {
		width: 100%;
		height: 60upx;
	}
</style>
