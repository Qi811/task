<template>
	<view style="text-align: left">
		<view  class="item" v-for="(item, index) in list" :key="index" v-if="list.length>1">
		
				<!-- <view style="margin-bottom: 8upx;text-align: right;">
					<text style="margin-bottom: 8upx;color: #0e80d2">3erere3</text>
				</view> -->
				<view style="color: #999999;font-size: 28upx;">
					<view style="margin-bottom: 8upx">提现资料： {{item.admin_remark}}</view>
					<view style="margin-bottom: 8upx">提现时间: {{$u.timeFormat(item.create_time, 'yyyy年mm月dd日')}}</view>
					
					<view style="margin-bottom: 8upx;text-align: right;">
						<!-- 提现金额： -->
						<text style="color: #e10a07;font-size: 32upx;font-weight: 600">￥{{item.price}}</text>
					</view>
				</view>
		
		</view>
		<u-empty text="暂无数据" mode="list" v-show="list.length<1" style="margin-top: 100px;"></u-empty>
	</view>
</template>

<script>
export default {
	data() {
		return {
			page: 1,
			size: 10,
			list: [],
		
		};
	},
	onLoad: function(e) {
	
		this.getMoney();
	},
	methods: {
		getMoney(){
			var uid = this.$Raichu.getData('uid');
			this.$Request.postT("/externalApi/tiXianInfo", {
				id: uid,
				page:1,
				size:100
			}).then(res => {
				this.list = res.data;
						
			});
		}
		
		
	},
	
};
</script>

<style lang="scss" scoped>


page {
	background: #ffffff;
}

.item {
	background: white;
	padding: 32rpx;
	margin: 32rpx;
	font-size: 28rpx;
	box-shadow: 7px 9px 34px rgba(0, 0, 0, 0.1);
	border-radius: 16upx;
}
</style>
