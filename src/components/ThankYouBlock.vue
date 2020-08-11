<template>
	<div class="thankyou">
	    <p class="text"><strong>感謝您加入聯署！</strong></p>
	    <p class="text">感謝您！我們需要更多市民加入，一同發聲，告訴政府「香港人關注氣候議題」，凝聚更大的力量要求正視氣候危機。您願意分享給身邊的家人和朋友，擴大拯救氣候危機的力量嗎？</p>
	    <p class="actions"><a class="btn action-button button--share" href="#" target="_blank" @click="mainShare">分享出去</a></p>
	    <p class="actions"><a class="btn action-button button--whatsappshare" href="#" target="_blank" @click="whatsAppShare"><img src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/whatsapp.svg?v=1554003003000" style="max-width: 24px; margin: 0 auto;" /></a></p>
	    <p class="text">全賴您的支持，讓我們能持續與專家合作，研究出具科學理據，提出能平衡經濟發展需要的能源出路。我們並將持續遊說多個區議會關注氣候危機，促請政府全面研究氣候變化的影響，識別高危地區，制定長遠應對策略，提升應對氣候危機的能力。</p>
	    <p class="actions"><a class="btn action-button button--support ty-page-donation-link" href="https://supporter.ea.greenpeace.org/hk/s/donate?campaign=climate&amp;ref=2020-climate-thankyou_page" target="_blank">支持我們</a></p>
	</div>
</template>

<script>
import { mainShare, whatsAppShare } from "@/share.js";

export default {
	name: "ThankYouBlock",
	data: function () {
		return {

		}
	},
	methods: {
		mainShare,
		whatsAppShare
	}
}
</script>

<style lang="scss">
.thankyou {
	padding-top: 20px;
	padding-bottom: 20px;
}
.thankyou strong {
	font-size: 22px;
}
.thankyou p {
	line-height: 1.42857;
	margin-bottom: 20px;
}
.actions a {
	color: #fff;
	text-decoration: none;
}
.actions a:hover {
	color: #0a0a0a;
}
.action-button {
	margin: 15px auto;
	color: #fff;
	display: block;
	padding: 10px 30px;
	text-align: center;
	border-radius: 4px;
	font-weight: bold;
	cursor: pointer;
	text-align: center;
	letter-spacing: 2px;
	text-decoration: none;
	outline: none;
	border: none;
}
.button--share {
	background-color: #3b5998;
}
.button--support {
	background-color: rgb(253, 162, 47);
}
.button--whatsappshare {
	background-color: #25D366;
}
.button--whatsappshare img{
	width: 100%;
	height: auto;
	max-width: 30px;
}
@media screen and (min-width: 768px) {
	.button--whatsappshare {
		display: none;
	}
}
</style>