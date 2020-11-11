<template>
	<view style="height: 100vh;text-align: center;background: #FFFFFF;">
	<!-- 	<image mode="aspectFit" style="margin-top: 80upx ;width: 100%;" :src="image"></image> -->
			<u-image width="100%"  :src="image" mode="widthFix"></u-image>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			image: '',
	
		};
	},
	onLoad() {
		this.getImg();
	},

	methods: {
		getImg() {
			this.$Request.postT("/externalApi/cooperation").then(res => {
				this.image = res.data;
			});
		}
	}
};
</script>

<style scoped>

</style>
