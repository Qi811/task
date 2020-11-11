<template>
	<view class="container">
		<view class="wrapper">
			<view class="bir-webviwe">
				<iframe id="iframe" class="viewiframe" :src="url" ref="iframe" @onload="onLoad"></iframe>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',


			};
		},
	
 

		methods: {
			onLoad() {
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/unionLogin", {
					userId: id,
				}).then(res => {
					this.url = res;

				});

			},
		

		
		}
	}
</script>
<style lang="scss" scoped>
	.bir-webviwe {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;

		.viewiframe {
			width: 100%;
			height: 100%;
			background: #FFFFFF
		}
	}
</style>
