import './index.less'
import assets from '@/assets'

const  HomePage = () => {
	const handleLoad = ()=>{
		console.log("下载")
	}


	return (
		<div className="home-wrap">
			<div className='section-first flexC'>
				<img src={assets.iconPlay}  className="play-icon"/>
				<div className='flexR'>
					<div className='line'/>
					<div className='title-s'>本地 &amp; 云端版，注册即可免费体验</div>
					<div className='line'/>
				</div>
				<div className='title'>小说推文视频 创作提效神器</div>
				<div className='sub-title'>小说AI分镜+批量SD绘图+批量关键帧+视频一键合成</div>
				<div className='btn flexR' onClick={handleLoad}>
					<img src={assets.windows}  className="window-icon"/>
					下载  Windows 版本
				</div>
				<div className='first-item-wrap flexR '>
					<div className='flexR'>
						<img src={assets.icon1}  className="icon-item"/>
						<div>一键完成故事AI分镜</div>
					</div>
					<div className='flexR'>
						<img src={assets.icon2}  className="icon-item"/>
						<div>一键完成故事批量绘图</div>
					</div>
					<div className='flexR'>
						<img src={assets.icon3}  className="icon-item"/>
						<div>一键完成图文视频合成</div>
					</div>
				</div>
			</div>
			<div className='section flexR'>
				<div className='flexR'>
					<img src={assets.iconLeft}  className="icon-quotation"/>
					<div className='content-text flexC '>
						<div>故事分镜</div>
						<div>批量绘图</div>
						<div>一键完成</div>
						<div className='sub-text'>支持基于AI能力的故事分镜</div>
						<div className='sub-text'>支持基于自定义模板的批量绘图</div>
					</div>
				</div>
				<img src={assets.tu1}  className="tu"/>
			</div>
			<div className='section flexR'>
				<img src={assets.tu2}  className="tu"/>
				<div  className='flexR'>
					<div className='content-text flexC left'>
						<div>抖音视频下载</div>
						<div className='sub-text'>支持基于故事情节的单镜头绘图调整</div>
						<div className='sub-text'>支持SD各类模型的自定义调整</div>
					</div>
					<img src={assets.iconRight}  className="icon-quotation"/>
				</div>
			</div>
			<div className='section flexR'>
				<div  className='flexR'>
					<img src={assets.iconLeft}  className="icon-quotation"/>
					<div className='content-text flexC '>
						<div>一键追爆款</div>
						<div className='sub-text'>支持基于镜头字幕时长的批量关键帧生成</div>
						<div className='sub-text'>支持丰富画面特效的图文视频一键合成</div>
					</div>
				</div>
				<img src={assets.tu3}  className="tu"/>
			</div>
			<div className='section'>
				<div className='title'>用户对我们的评价</div>
			</div>
			<div className='section-first section-earth flexC'>
				<div className='flexR' style={{marginTop: '60px'}}>
					<div className='line'/>
					<div className='title-s'>本地 &amp; 云端版，注册即可免费体验</div>
					<div className='line'/>
				</div>
				<div className='title'>小说推文视频 创作提效神器</div>
				<div className='sub-title'>小说AI分镜+批量SD绘图+批量关键帧+视频一键合成</div>
				<div className='btn flexR' onClick={handleLoad}>
					<img src={assets.windows}  className="window-icon"/>
					下载  Windows 版本
				</div>
			</div>
			<div className='section flexR' style={{width: '500px'}}>
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
