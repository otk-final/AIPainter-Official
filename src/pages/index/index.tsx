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
			<div className='content-wrap flexC'>
				<img src={assets.icon1} className="icons" />
				<div className='h1'>无需显卡</div>
				<div className='h2'>告别昂贵的NVIDIA显卡，轻松释放创作激情。</div>
				<div className='h-line'></div>
				<img src={assets.img2} className="img1"/>
			</div>
			<div className='bg bg1'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon2} className="icons" />
				<div className='h1'>零配置之轻奢</div>
				<div className='h2'>摒弃繁琐安装步骤，一键启动，畅享创意无阻。</div>
				<div className='h-line' style={{background: '#E17AB4'}}></div>
				<img src={assets.img3} className="img1"/>
			</div>
			<div className='bg bg2'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon3} className="icons" />
				<div className='h1'>双系统畅行</div>
				<div className='h2'>Windows、Mac双系统兼容，灵活驾驭创意之舟。</div>
				<div className='h-line' style={{background: '#50A4E3'}}></div>
				<img src={assets.img4} className="img1"/>
			</div>
			<div className='bg bg3'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon4} className="icons" />
				<div className='h1'>SDXL巨无霸模型</div>
				<div className='h2'>1024分辨率直出，画面精致细腻，高清放大令4K成为细节的新标杆。</div>
				<div className='h-line' style={{background: '#D680FF'}}></div>
				<img src={assets.img5} className="img1"/>
			</div>
			<div className='bg bg4'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon5} className="icons" />
				<div className='h1'>AI翻拍精粹</div>
				<div className='h2'>智能角色动作参照，画面质感贴近原片，创意更上一层楼。</div>
				<div className='h-line' style={{background: '#58B4D1'}}></div>
				<img src={assets.img6} className="img1"/>
			</div>
			<div className='bg bg3 bg5'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon6} className="icons" />
				<div className='h1'>智能创作引领</div>
				<div className='h2'>AI智能分镜，GPT场景描述，中文提示词助您快速勾勒完美画面。</div>
				<div className='h-line' style={{background: '#838EF1'}}></div>
				<img src={assets.img7} className="img1"/>
			</div>
			<div className='bg bg6'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon7} className="icons" />
				<div className='h1'>AI文风妙笔</div>
				<div className='h2'>换字不换意，文案同质化轻松躲避，创作灵感无限。</div>
				<div className='h-line' style={{background: '#E17AB4'}}></div>
				<img src={assets.img8} className="img1"/>
			</div>
			<div className='bg bg2 bg7'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon8} className="icons" />
				<div className='h1'>AI声音魅力</div>
				<div className='h2'>60余种AI语音，横跨性别、年龄、地域，各种语种涵盖无缺。</div>
				<div className='h-line' style={{background: '#50A4E3'}}></div>
				<img src={assets.img9} className="img1"/>
			</div>
			<div className='bg bg8'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon9} className="icons" />
				<div className='h1'>自动生成精华</div>
				<div className='h2'>智能关键帧动效，画面生动有趣，创作效率飙升。</div>
				<div className='h-line' style={{background: '#D680FF'}}></div>
				<img src={assets.img10} className="img1"/>
			</div>
			<div className='bg bg1 bg9'></div>
			<div className='content-wrap flexC'>
				<img src={assets.icon10} className="icons" />
				<div className='h1'>超值价格体验</div>
				<div className='h2'>比肩一顿精致KFC的价格，享受顶级视频创作体验，创业之门轻松开启。</div>
				<div className='h-line' style={{background: '#58B4D1'}}></div>
				<img src={assets.img11} className="img1"/>
			</div>
			<div className='bg bg3 bg10'></div>
		
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
			Copyright © 2024 Wuhan Turing Innovation Technology Co., Ltd.All rights reserved.<br/>鄂ICP备2024046738号-1
			</div>
		</div>
	);
}

export default HomePage

