import {Composition} from 'remotion';

const EmptyComponent = () => null;

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={EmptyComponent}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
