import {Composition} from 'remotion';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={Composition}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
