<template>
	<view class="container">
		<view class="uni-form-item">
		  <picker @change="examinationType" :range="examinationTypeArray">
			  <label class="zf">支付类型</label>
			  <label class="lx" @click="chose">{{ examinationTypeArrayType }}</label>
		  </picker>
		</view>
		<view v-if="isbank">
			<u-field label="银行名称" type="text" placeholder="请输入银行名称" v-model="bankName"></u-field>
			<u-field label="支行名称" type="text" placeholder="请输入支行名称" v-model="subbranchName"></u-field>
			<u-field label="用户名" type="text" placeholder="请输入用户名" v-model="bankUser"></u-field>
			<u-field label="卡号" type="text" placeholder="请输入银行卡号" v-model="bankNumber"></u-field>
		</view>
		<view v-if="iszfb">
			<u-field label="用户名" type="text" placeholder="请输入用户名" v-model="zfbUser"></u-field>
			<u-field label="支付账号" type="text" placeholder="请输入支付宝账号" v-model="zfbkNumber"></u-field>
		</view>
		
		<button class="confirm-btn" @click="save" >提 交</button>
		<view style="padding: 32upx 64upx;font-size: 24upx;color: #999999;">
			提示：请正确填写收款人的卡号和真实的收款人姓名，否则将无法正常收款
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankName:'',
				subbranchName:'',
				bankUser: '',
				bankNumber: '',
				zfbUser:'',
				zfbkNumber:'',
				examinationTypeArray:['支付宝','银行卡'],
				examinationTypeIndex:0,
				examinationTypeArrayType:'支付宝',
				isbank:false,
				iszfb:true,
				status:0
			}
		},
		onLoad() {
			let uid = this.$Raichu.getData("uid");
			if (uid) {
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/payInfo", {
					userId: uid,
				}).then(res => {
					this.status = res.status
					if(this.examinationTypeArrayType == '银行卡' || this.status == 3){
						this.examinationTypeIndex = 1,
						this.examinationTypeArrayType = '银行卡',
						this.isbank = true,
						this.iszfb = false
						if (uid) {
							var id = this.$Raichu.getData('uid');
							this.$Request.postT("/externalApi/payInfo", {
								userId: uid,
							}).then(res => {
								this.bankName=res.bank_name;
								this.subbranchName=res.subbranch_name;
								this.bankUser=res.bank_user;
								this.bankNumber=res.bank_number;
							});
						}
					}else if(this.examinationTypeArrayType == '支付宝' || this.status == 2){
						this.examinationTypeIndex = 0,
						this.examinationTypeArrayType = '支付宝',
						this.isbank = false,
						this.iszfb = true
						if (uid) {
							var id = this.$Raichu.getData('uid');
							this.$Request.postT("/externalApi/payInfo", {
								userId: uid,
							}).then(res => {
								this.zfbUser=res.bank_user;
								this.zfbkNumber=res.bank_number;
							});
						}
					}
				});
			}
		},
		methods: {
			chose(){
			},
			examinationType(e) {
			    this.examinationTypeIndex = e.target.value;
			    this.examinationTypeArrayType=this.examinationTypeArray[this.examinationTypeIndex]
				if(this.examinationTypeArrayType == "支付宝"){
					this.isbank = false,
					this.iszfb = true
				}else if(this.examinationTypeArrayType == "银行卡"){	
					this.isbank = true,
					this.iszfb = false
				}
			},
			navBack() {
				uni.navigateBack();
			},
			save() {
				var uid = this.$Raichu.getData('uid');
				if(this.examinationTypeArrayType == '银行卡'){
					if (!this.bankName) {
						this.$Raichu.showToast("请输入银行名称");
					} else if (!this.subbranchName) {
						this.$Raichu.showToast("请输入支行名称");
					} else if (!this.bankUser){
						this.$Raichu.showToast("请设置收款人姓名");
					}else if (!this.bankNumber){
						this.$Raichu.showToast("请设置卡号");
					}else {
						this.$Raichu.showLoading("修改中...");
						this.$Request.postT("/externalApi/userInfoSave", {
							userId: uid,
							bankName:this.bankName,
							subbranchName:this.subbranchName,
							bankUser: this.bankUser,
							bankNumber: this.bankNumber,
							status:3
						}).then(res => {
							if (res.code == 0) {
								this.$Raichu.showToast('修改成功')
								uni.showToast({
								    title: '修改成功',
									icon:'success',
								    duration: 2000
								});
								this.examinationTypeIndex = 1,
								this.examinationTypeArrayType = '银行卡',
								this.isbank = true,
								this.iszfb = false
							} else {
								this.$Raichu.showToast(res.msg)
							}
							uni.hideLoading();
						});
					}
				}else if(this.examinationTypeArrayType == '支付宝'){
					if (!this.zfbUser) {
						this.$Raichu.showToast("请输入支付宝名称");
					} else if (!this.zfbkNumber) {
						this.$Raichu.showToast("请输入支付宝账号");
					} else {						
						this.$Raichu.showLoading("修改中...");
						this.$Request.postT("/externalApi/userInfoSave", {
							userId: uid,
							bankName:this.examinationTypeArrayType,
							subbranchName:'',
							bankUser: this.zfbUser,
							bankNumber: this.zfbkNumber,
							status:2
						}).then(res => {
							if (res.code == 0) {
								uni.showToast({
								    title: '修改成功',
									icon:'success',
								    duration: 2000
								});
								this.examinationTypeIndex = 0,
								this.examinationTypeArrayType = '支付宝',
								this.isbank = false,
								this.iszfb = true
							} else {
								this.$Raichu.showToast(res.msg)
							}
							uni.hideLoading();
						});
					}
				}
			}
		},
	}
</script>

<style lang='scss'>
	page {
		background: #FFFFFF;
	}
	.zf,.lx{
		padding-left: 15px;
	}
	.lx{
		color: #A6A9AD;
	}
	.uni-form-item{
		height: 49px;
		border-bottom: 1px solid whitesmoke;
		line-height: 40px;
	}
	.container {
		padding-top: 32upx;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #fff;
	}
	.confirm-btn1 {
		width: 300px;
		height: 42px;
		line-height: 42px;
		border-radius: 30px;
		margin-top: 70upx;
		background: whitesmoke;
		color: grey;
		font-size: $font-lg;

		&:after {
			border-radius: 60px;
		}
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 20px;
	}

	.back-btn {
		position: absolute;
		left: 20px;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 20px;
		font-size: 20px;
		color: $font-color-dark;
	}

	.left-top-sign {
		font-size: 80px;
		color: $page-color-base;
		position: relative;
	}

	.right-top-sign {
		position: absolute;
		top: 40px;
		right: -15px;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 20px;
			height: 40px;
			background: -moz-linear-gradient(left, #fa4dbe 0, #fbaa58 100%);
			background: -webkit-gradient(linear,
				left top,
				left right,
				color-stop(0, #fa4dbe),
				color-stop(100%, #fbaa58));
			background: -webkit-linear-gradient(left, #fa4dbe 0, #fbaa58 100%);
			background: -o-linear-gradient(left, #fa4dbe 0, #fbaa58 100%);
			background: -ms-linear-gradient(left, #fa4dbe 0, #fbaa58 100%);
			background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198px;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -270px;
		bottom: -320px;
		/*border: 100upx solid #d0d1fd;*/
		border-radius: 50%;
		padding: 90px;
	}

	.welcome {
		position: relative;
		left: 30px;
		top: -50px;
		font-size: 23px;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 20px;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30px;
		background: $page-color-light;
		height: 64px;
		border-radius: 4px;
		margin-bottom: 30px;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 30px;
			line-height: 28px;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}

		input {
			height: 40px;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
	}

	.confirm-btn {
		width: 300px;
		height: 42px;
		line-height: 42px;
		border-radius: 30px;
		margin-top: 70upx;
		background: #e10a07;
		color: #fff;
		font-size: $font-lg;

		&:after {
			border-radius: 60px;
		}
	}

	.forget-section {
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40px;
	}

	.register-section {
		position: fixed;
		left: 0;
		bottom: 30px;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;

		text {
			color: $font-color-spec;
			margin-left: 10px;
		}
	}
</style>
