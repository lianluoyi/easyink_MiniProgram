<template>
	<view class="main">
		<view v-if="codeUrl" >
			<view class="main-container">
				<view class="qr-code">
					<u-image :show-menu-by-longpress="true" :src="codeUrl" width="600rpx" height="600rpx"  />
				</view>
				<view class="qr-text">
					<view>长按识别二维码</view>
					<view>添加我的企业微信</view>
				</view>
			</view>
			<view class="footer">
				联络易提供技术支持
			</view>
			
		</view>
		<view v-else class="empty">
			<u-empty
			        :icon='emptyUrl'
					text='活动已结束'
					textColor='#ACABAB'
					width='150'
					height='150'
					marginTop='153'
			>
			</u-empty>
		</view>
		
		
	</view>

</template>

<script>
	export default {
		data() {
			return {
				codeUrl: '', //活码
				type:'', //活码类型
				emptyUrl:"/static/img/empty.png"
			}
		},
		onLoad(options) {
			this.codeUrl = options.qrcodeUrl ? decodeURIComponent(options.qrcodeUrl) : '';
			this.type = options.type;
		},
		methods: {}
	}
</script>

<style scoped lang="scss">
	.main {
		.main-container {
			margin: 60rpx auto 40rpx auto;
			border-radius: 20rpx;
			box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.2);
			padding-bottom: 60rpx;
			width: 640rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: rgba(255, 255, 255, 100);

			.qr-code {
				margin: 60rpx 60rpx 20rpx 60rpx;
			}

			.qr-text {
				color: rgba(96, 98, 102, 100);
				font-size: 28rpx;
				text-align: center;
			}
		}

		.footer {
			text-align: center;
			color: rgba(153, 153, 153, 100);
			font-size: 24rpx;
		}
	}
</style>
