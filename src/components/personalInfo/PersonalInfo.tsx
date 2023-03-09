import { Typography } from 'antd'
import styles from './personalInfo.module.less'
import { TypeAnimation } from 'react-type-animation'

const PersonalInfo = () => {
	return (
		<div className={styles.personalInfo}>
			<Typography className={styles.title}>
				<TypeAnimation
					sequence={['I am Zeeshan Mustfai', 1000, '']}
					speed={50}
					wrapper='span'
					repeat={Infinity}
				/>
			</Typography>
			<Typography className={styles.descirption}>
				I am a front end developer with having 4 years plus experience. I am
				proficient in{' '}
				<TypeAnimation
					sequence={[
						'React',
						1000,
						'Redux',
						1000,
						'Material Ui',
						1000,
						'Ant Design',
						1000,
						'Next js',
						1000,
						'Git',
						1000,
						'Bit Bucket',
						1000,
						'Jira',
						1000,
						'Responsive Design',
						1000,
					]}
					speed={40}
					repeat={Infinity}
				/>
			</Typography>
		</div>
	)
}
export default PersonalInfo
