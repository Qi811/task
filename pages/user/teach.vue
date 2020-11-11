<template>
	<view style="width: 100%;height: 100vh;background: #FFFFFF;">

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
				this.$Request.postT("/externalApi/policy").then(res => {
					this.image = res.data;
				});
			}
		}
	};
</script>

<style scoped>

</style>
