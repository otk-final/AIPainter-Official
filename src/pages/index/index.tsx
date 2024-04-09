import './index.less'
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

	const renderItem =(i, index: number )=>{
		return (
			<div className='content-ww' key={index}>
				<div className='content-wrap flexC'>
					<img src={i.icon} className="icons" />
					<div className='h1'>{i.h1}</div>
					<div className='h2'>{i.h2}</div>
					<div className='h-line' style={{background: i.lineColor}}></div>
					<img src={i.bgUrl} className="img1"/>
				</div>
				<div className={`bg bg${index+1}`}></div>
			</div>
		)
	}

	return (
		<div className="home-wrap flexC">
			<div className='section-first flexC'>
				<img src={assets.logo} className="logo-icon" />
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
					<a className='btn flexR right' href={macUrl}>
						<img src={assets.mac} className="window-icon" />
						下载mac版本
					</a >
				</div>
				<img src={assets.img1} className="img1" style={{height: '525px'}}/>
			</div>
			<div className='section-title'>产品亮点</div>
			<div className='section-sub-title'>AI翻拍（一键追爆款，剪同款）✓   Stable Diffusion ✓   GPT-3.5 Turbo ✓   翻译 ✓   AI配音 ✓   </div>
			{lists.map(renderItem)}
			<div className='section-first last  flexC'>
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
					<a className='btn flexR right' href={macUrl}>
						<img src={assets.mac} className="window-icon" />
						下载mac版本
					</a>
				</div>
			</div>
			<div className='flexR' >
				<div className='flexC'>
					<img src={assets.wechat} className='code-img' />
					<div className='code-text'>扫码加入微信群</div>
				</div>
				<div className='flexC' style={{marginLeft: '30px'}}>
					<img src={assets.qq}  className='code-img' />
					<div className='code-text'>扫码加入微信群</div>
				</div>
			</div>
			<img src={assets.logo} className="bottom-logo-icon" />
			<div className='copyright'>
			Copyright © 2024 Wuhan Turing Innovation Technology Co., Ltd.All rights reserved.<br/>
			<a ><img src={assets.ga} alt="" width={12} /> 鄂公网安备42018502007445</a > 
			<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">鄂ICP备2024046738号-1</a>
			</div>
		</div>
	);
}

export default HomePage

const lists = [
	{
		h1: '无需显卡',
		h2: '告别昂贵的NVIDIA显卡，轻松释放创作激情。',
		lineColor: '#838EF1',
		icon: assets.icon1,
		bgUrl: assets.img2,
	},
	{
		h1: '零配置之轻奢',
		h2: '摒弃繁琐安装步骤，一键启动，畅享创意无阻。',
		lineColor: '#E17AB4',
		icon: assets.icon2,
		bgUrl: assets.img3,
	},
	{
		h1: '双系统畅行',
		h2: 'Windows、Mac双系统兼容，灵活驾驭创意之舟。',
		lineColor: '#50A4E3',
		icon: assets.icon3,
		bgUrl: assets.img4,
	},
	{
		h1: 'SDXL巨无霸模型',
		h2: '1024分辨率直出，画面精致细腻，高清放大令4K成为细节的新标杆。',
		lineColor: '#D680FF',
		icon: assets.icon4,
		bgUrl: assets.img5,
	},
	{
		h1: 'AI翻拍精粹',
		h2: '智能角色动作参照，画面质感贴近原片，创意更上一层楼。',
		lineColor: '#58B4D1',
		icon: assets.icon5,
		bgUrl: assets.img6,
	},
	{
		h1: '智能创作引领',
		h2: 'AI智能分镜，GPT场景描述，中文提示词助您快速勾勒完美画面。',
		lineColor: '#838EF1',
		icon: assets.icon6,
		bgUrl: assets.img7,
	},
	{
		h1: 'AI文风妙笔',
		h2: '换字不换意，文案同质化轻松躲避，创作灵感无限。',
		lineColor: '',
		icon: assets.icon7,
		bgUrl: assets.img8,
	},
	{
		h1: 'AI声音魅力',
		h2: '60余种AI语音，横跨性别、年龄、地域，各种语种涵盖无缺。',
		lineColor: '#50A4E3',
		icon: assets.icon8,
		bgUrl: assets.img9,
	},
	{
		h1: '自动生成精华',
		h2: '智能关键帧动效，画面生动有趣，创作效率飙升。',
		lineColor: '#D680FF',
		icon: assets.icon9,
		bgUrl: assets.img10,
	},
	{
		h1: '超值价格体验',
		h2: '比肩一顿精致KFC的价格，享受顶级视频创作体验，创业之门轻松开启。',
		lineColor: '#58B4D1',
		icon: assets.icon10,
		bgUrl: assets.img11,
	}
]