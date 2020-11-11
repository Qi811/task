<template>
	<view class="task-content">
		<view style="width: 94%;margin: 0 auto;">
			<u-subsection :list="list" :current="curNow" @change="sectionChange" active-color="#ff9900"></u-subsection>
			<view style="margin: 150px;" v-if='taskList.length<1'>
				<u-empty text="暂无数据" mode="list"></u-empty>
			</view>
		</view>
		
		<view class="task-list" v-for="(item, index) in taskList" :key="index" >
			<view style="width:80%;margin-left: 20upx;">
				<view style="font-size:26upx;margin-top:10upx;display: flex; color: #999999;">
					<view style="width: 60%; line-height: 50px;font-size: 1rem;font-weight: 600;color: #000000;">{{item.title}}</view>
					<view style="width:40%;line-height: 30px;  " v-if='curNow==0'>
						<p>	剩余时间：</p>
						<u-count-down :timestamp="item.end_time-now" separator='zh'></u-count-down>
					</view>
					<view style="width:40%;line-height: 20px; margin-top: 10px; " v-if='curNow!=0'>
						<p>	提交时间：</p>
						<p>{{$u.timeFormat(item.create_time, 'yyyy-mm-dd hh:MM')}}</p>
					</view>
				</view>
				<view style="display: flex; flex-direction: row;width: 120%;">
						<image src="../../static/img/task/taskmoney.png" style="margin-top: 11upx;height: 22upx;width: 30upx;"></image>
					<view style="width: 60%;margin-left: 10upx;color: #09BB07;margin-top: 5upx;">+{{item.price}}元</view>
					<view v-if='curNow==0' style="width:130%;height: 50upx;display: flex;text-align: center;">
						<view style="width: 59%;height: 130%; background-color: rgb(255, 153, 0); color: #FFFFFF; border: 1px solid #F0F0F0;border-radius: 12upx; line-height: 2.7;font-size: 24upx;margin-left: 20upx;" @click="out(item.task_id)">放弃任务</view>
						<view @click="apply(item.task_id)" style="width: 59%;height: 130%; background-color: rgb(0, 193, 114); color: #FFFFFF; border: 1px solid #F0F0F0;line-height: 2.7; font-size: 24upx;text-align: center;margin-left: 10upx;border-radius: 12upx;">提交</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				now:parseInt( Date.parse(new Date())/1000),
				list: [
					{
						name: '待完成'
					}, 
					{
						name: '审核中'
					}, 
					{
						name: '已审核'
					},
					{
						name: '审核失败'
					}
				],
				current: 1,
				curNow: 0,
				taskList:[],
				pageInfo:{
					count:0,
					pageIndex:1,
					pageSize:6
				},
			}
		},
		onLoad: function(options) {
			this.toList();
		},
		 activated(){
			this.toList();
		 },
		onReachBottom() {
			// this.toList()
			var id = this.$Raichu.getData('uid');
			this.$Request.postT("/externalApi/pickTask", {
				id: id,
				size: this.pageInfo.pageSize,
				page: this.pageInfo.pageIndex + 1,
				status:this.curNow
			}).then(res => {
				if(res.data.length != 0){
					this.taskList = this.taskList.concat(res.data)
					this.pageInfo.pageIndex = this.pageInfo.pageSize + 1,
					this.pageInfo.pageSize = res.data.length
				}else{
					this.pageInfo.pageIndex = this.pageInfo.pageIndex,
					this.pageInfo.pageSize =  this.pageInfo.pageSize + 5
				}
			});
		},
		methods:{
			sectionChange(index) {
				this.curNow = index;
				this.toList(index);
			},
			toList(status) {
				if(status==undefined){
					status=0
				}
				this.curNow=status;
				var id = this.$Raichu.getData('uid');
				this.$Request.postT("/externalApi/pickTask", {
					id: id,
					size: this.pageInfo.pageSize,
					page: 1,
					status:status
				}).then(res => {
					this.taskList = res.data
				});
			},
			out(ids){
				var that = this
				var id = this.$Raichu.getData('uid');
				uni.showModal({
					title:'提示',
					content:'确定要删除此任务吗?',
					showCancel:true,
					success:function(res) {
						if(res.confirm){
							that.$Request.postT("/externalApi/taskAbandon",{
								id:ids,
								userId:id
							}).then(res => {
								if(res.code == 0){
									that.$Raichu.showToast('删除成功')
									uni.showToast({
										title:'删除成功',
										icon:'success',
										duration:2000
									})
									that.taskList = that.taskList.filter(item => (ids !== item.task_id))
								}else{
									that.$Raichu.showToast('操作失败')
								}
							})
						}
					},
				})
			},
			apply(task_id){
				uni.navigateTo({
				    url: '/pages/task/detail?id='+task_id,
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	.task-list {
		width: 94%;
		display: flex;
		margin: 10px auto;
		padding: 10px;
		box-shadow: rgba(183, 183, 183, 0.3) 1px 0px 10px 0px;
	}
</style>
