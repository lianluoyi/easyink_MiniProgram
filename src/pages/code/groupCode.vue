<template>
	<view class="main">
		<view v-if="codeInfo.actualQRCode" >
			<view class="main-header">
				<view class="code-name">
					{{codeInfo.activityName}}
				</view>
				<view class="code-word">
					{{codeInfo.guide}}
				</view>
			</view>
			<view class="main-container">
				<view class="qr-code">
					<u-image :showMenuByLongpresse='true'  :src="codeInfo.actualQRCode" width="600rpx" height="600rpx" />
				</view>
				<view class="qr-text">
					<view>长按识别二维码</view>
					<view>欢迎加入群聊</view>
				</view>
				<view v-if="codeInfo.isOpenTip">
					<u-button color="red" @click="showDialog=true" text="无法加群？" type="error" size="mini" />
				</view>
				<u-popup  :show="showDialog" @close="close" @open="open" mode="center">
					<view class="close-dialog">
						<u-icon  name="close" @click="showDialog=false"></u-icon>
					</view>
					<view class="dialog-content">
							<u-image v-if="codeInfo.serviceQrCode" width="200"  :src="codeInfo.serviceQrCode" ></u-image>
						<view  class="marked">
							{{codeInfo.tipMsg}}
						</view>
						<view v-if="codeInfo.serviceQrCode" class="tip">
							请长按二维码添加客服微信
						</view>
					</view>
				</u-popup>
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
	const HIDDEN_TIP = '0'; //隐藏无法加群的提示
	export default {
		data() {
			return {
				codeInfo:{
					type:'', //活码类型
					activityName: '', // 活码名称
					guide: '', // 加群引导语
					actualQRCode: '', // 实际群码
					isOpenTip: '', // 是否显示无法加群提示
					tipMsg: '', // 无法加群提示语
					serviceQrCode: null, // 客服二维码
					groupName: '' // 实际群名称
				},
				showDialog: false,
				emptyUrl:"/static/img/empty.png"
			}
		},
		onLoad(options) {
			for (let key in options) {
				options[key] = options[key] ? decodeURIComponent(options[key]) : '';
			}
			this.codeInfo = Object.assign(this.codeInfo, options);
			this.codeInfo.isOpenTip = this.codeInfo.isOpenTip !== HIDDEN_TIP
		},
		methods: {
			open() {
				this.showDialog = true
			},
			close() {
			  this.showDialog = false
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		.main-header {
			margin: 40rpx 0rpx 40rpx 60rpx;

			.code-name {
				font-size: 32rpx;
				font-weight: 700;
				margin-bottom: 30rpx;
			}

			.code-word {
				width: 640rpx;
				font-size: 28rpx;
			}
		}

		.main-container {
			margin: 40rpx auto 40rpx auto;
			border-radius: 20rpx;
			box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.2);
			width: 640rpx;
			padding-bottom: 60rpx;
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
				margin-bottom: 30rpx;
			}
			
			.close-dialog{
				position: absolute;
				top: 10px;
				right: 10px;
			}
			
			.dialog-content{
				width: 445rpx;
				padding: 25px 40px;
				display: flex;
				flex-direction: column;
				align-items: center;
				
				.marked{
					font-size: 16px;
					color:#333;
					text-align: center;
				}
				
				.tip{
					color: #aaa;
					font-size: 12px;
					margin-top: 30px;
					text-align: center;
				}
				
				::v-deep .u-image__image{
					max-height: 400px;
				}
			}
			
			::v-deep .u-safe-bottom{
				display: none;
			}
		}

		.footer {
			text-align: center;
			color: rgba(153, 153, 153, 100);
			font-size: 24rpx;
		}
	}
</style>
