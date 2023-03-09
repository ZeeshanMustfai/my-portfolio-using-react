import { menuList } from '../../mock/menuList'
import { Menu as AntMenu, Typography } from 'antd'
import {
	FacebookOutlined,
	LinkedinOutlined,
	SkypeOutlined,
	GithubOutlined,
	TwitterOutlined,
} from '@ant-design/icons'
import styles from './menu.module.less'
const Menu = () => {
	return (
		<>
			<div className={styles.menuContainer}>
				<div className={styles.profileImage}>
					<img
						src={'https://freepngimg.com/thumb/man/22654-6-man-thumb.png'}
						alt=''
						width={150}
						height={150}
					/>
					<div className={styles.nameSection}>
						<Typography className={styles.title}>Zeeshan Mustfai</Typography>
						<Typography className={styles.designation}>
							React Developer
						</Typography>
					</div>
				</div>

				<AntMenu mode='inline' className={styles.menuMain}>
					{menuList.map(({ key, icons, label }) => (
						<AntMenu.Item key={key} icon={icons} className={styles.menu}>
							{label}
						</AntMenu.Item>
					))}
				</AntMenu>

				<div className={styles.socialSection}>
					<FacebookOutlined className={styles.socialIcon} />
					<LinkedinOutlined className={styles.socialIcon} />
					<SkypeOutlined className={styles.socialIcon} />
					<GithubOutlined className={styles.socialIcon} />
					<TwitterOutlined className={styles.socialIcon} />
				</div>
			</div>
		</>
	)
}

export default Menu
