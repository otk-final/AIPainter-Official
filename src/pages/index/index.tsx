import './index.less'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation } from 'swiper/modules';
import assets from '@/assets'
import 'swiper/css';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import axios from 'axios';

const defaultAxios = axios.create({
	baseURL: process.env.UPDATER_HOST,
	timeout: 60000,
	headers: { //即将被发送的自定义请求头
		"Content-Type": "application/json;charset=utf-8",
		"Access-Control-Allow-Origin": "*"
	},
	withCredentials: false //表示跨域请求时是否需要使用凭证
})

const HomePage = () => {
	const [firstSwiper, setFirstSwiper] = useState(null);
	const [secondSwiper, setSecondSwiper] = useState(null);
	const [windowsUrl, setWindowsUrl] = useState("")
	const [macUrl, setMacUrl] = useState("")

	useEffect(() => {
		defaultAxios.get('/releases').then((res) => {
			let wurl;
			let murl;
			for (let i = 0; i < res.data.length; i++) {
				if (res.data[i]?.bundles?.windows && !wurl) {
					const version = res.data[i].version;
					const name = res.data[i].bundles.windows.name;
					wurl = `/download/${version}/windows/${name}`;
				}
				if (res.data[i]?.bundles && res.data[i]?.bundles?.darwin && !murl) {
					console.log("macUrl")
					const version = res.data[i].version;
					const name = res.data[i].bundles.darwin.name;
					murl = `/download/${version}/darwin/${name}`;
				}
			}
			if (wurl) setWindowsUrl(process.env.UPDATER_HOST + wurl);
			if (murl) setMacUrl(process.env.UPDATER_HOST + murl);
		})
	}, [])

	return (
		<div className="home-wrap">
			<div className='section-first flexC'>
				<img src={assets.iconPlay} className="play-icon" />
				<div className='flexR'>
					<div className='line' />
					<div className='title-s'>本地 &amp; 云端版，注册即可免费体验</div>
					<div className='line' />
				</div>
				<div className='title'>小说推文视频 创作提效神器</div>
				<div className='sub-title'>小说AI分镜+批量SD绘图+批量关键帧+视频一键合成</div>
				<div className='flexR'>
					<a className='btn flexR' href={windowsUrl}>
						<img src={assets.windows} className="window-icon" />
						下载windows版本
					</a >
					<a className='btn flexR' href={macUrl}>
						<img src={assets.mac} className="window-icon" />
						下载mac版本
					</a >
				</div>

				<div className='first-item-wrap flexR '>
					<div className='flexR'>
						<img src={assets.icon1} className="icon-item" />
						<div>一键完成故事AI分镜</div>
					</div>
					<div className='flexR'>
						<img src={assets.icon2} className="icon-item" />
						<div>一键完成故事批量绘图</div>
					</div>
					<div className='flexR'>
						<img src={assets.icon3} className="icon-item" />
						<div>一键完成图文视频合成</div>
					</div>
				</div>
			</div>
			<div className='section flexR'>
				<div className='flexR'>
					<img src={assets.iconLeft} className="icon-quotation" />
					<div className='content-text flexC '>
						<div>故事分镜</div>
						<div>批量绘图</div>
						<div>一键完成</div>
						<div className='sub-text'>支持基于AI能力的故事分镜</div>
						<div className='sub-text'>支持基于自定义模板的批量绘图</div>
					</div>
				</div>
				<img src={assets.tu1} className="tu" />
			</div>
			<div className='section flexR'>
				<img src={assets.tu2} className="tu" />
				<div className='flexR'>
					<div className='content-text flexC left'>
						<div>抖音视频下载</div>
						<div className='sub-text'>支持基于故事情节的单镜头绘图调整</div>
						<div className='sub-text'>支持SD各类模型的自定义调整</div>
					</div>
					<img src={assets.iconRight} className="icon-quotation" />
				</div>
			</div>

			<div className='section flexR'>
				<div className='flexR'>
					<img src={assets.iconLeft} className="icon-quotation" />
					<div className='content-text flexC '>
						<div>一键追爆款</div>
						<div className='sub-text'>支持基于镜头字幕时长的批量关键帧生成</div>
						<div className='sub-text'>支持丰富画面特效的图文视频一键合成</div>
					</div>
				</div>
				<img src={assets.tu3} className="tu" />
			</div>
			<div className='section section-comment'>
				<div className='swiper-title'>用户对我们的评价</div>
				<div>
					<Swiper
						className="swiper-wrap"
						spaceBetween={0}
						slidesPerView={1}
						navigation
						autoplay
						modules={[Controller, Navigation]}
						onSwiper={setFirstSwiper}
						controller={{ control: secondSwiper }}
					>
						{
							comments.map((i, index) => {
								return (
									<SwiperSlide key={index}>
										<div className='swiper-item flexR'>
											<div className='comment-avatar'></div>
											<div >
												<div className='comment-name'>{i.name}</div>
												<div className='comment-text'>{i.text}</div>
											</div>
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>

			</div>
			<div className='section-first section-earth flexC'>
				<div className='flexR' style={{ marginTop: '60px' }}>
					<div className='line' />
					<div className='title-s'>本地 &amp; 云端版，注册即可免费体验</div>
					<div className='line' />
				</div>
				<div className='title'>小说推文视频 创作提效神器</div>
				<div className='sub-title'>小说AI分镜+批量SD绘图+批量关键帧+视频一键合成</div>
				<div className='flexR'>
					<a className='btn flexR' href={windowsUrl}>
						<img src={assets.windows} className="window-icon" />
						下载windows版本
					</a >
					<a className='btn flexR' href={macUrl}>
						<img src={assets.mac} className="window-icon" />
						下载mac版本
					</a>
				</div>
			</div>
			<div className='section flexR' style={{ width: '500px' }}>
				<div className='flexC'>
					<img src="" className='code-img' />
					<div className='code-text'>扫码加入微信群</div>
				</div>
				<div className='flexC'>
					<img src="" className='code-img' />
					<div className='code-text'>扫码加入微信群</div>
				</div>
			</div>
			<div className='copyright'>
				Copyright © 2024 ALADDIN SINGULARITY HOLDING LIMITED 版权所有京ICP备2021016160号-2
			</div>
		</div>
	);
}

export default HomePage


const comments = [
	{
		avatarUrl: '',
		name: '抖音某推文大神',
		text: '极虎漫剪的故事分镜功能非常易用，我可以快速完成一篇小说的分镜。'
	},
	{
		avatarUrl: '',
		name: '抖音某推文大神2',
		text: '极虎漫剪的故事分镜功能非常易用，我可以快速完成一篇小说的分镜。'
	},
	{
		avatarUrl: '',
		name: '抖音某推文大神3',
		text: '极虎漫剪的故事分镜功能非常易用，我可以快速完成一篇小说的分镜。'
	},
	{
		avatarUrl: '',
		name: '抖音某推文大神4',
		text: '极虎漫剪的故事分镜功能非常易用，我可以快速完成一篇小说的分镜。'
	},
	{
		avatarUrl: '',
		name: '抖音某推文大神5',
		text: '极虎漫剪的故事分镜功能非常易用，我可以快速完成一篇小说的分镜。'
	}
]
