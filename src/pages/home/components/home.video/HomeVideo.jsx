import './home.video.scss';
import youtubeImg from '../../../../assets/svg/youtube.svg';

function HomeVideo() {
	return (
		<div className='home-video'>
			<h2 className='subtitle'>Видео</h2>
			<div className='home-video__card'>
				<img src={youtubeImg} alt='' />
			</div>
		</div>
	);
}

export default HomeVideo;
