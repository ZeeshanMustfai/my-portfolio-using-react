import styles from './mainLayout.module.less'
import { Layout, Typography } from 'antd'
import Menu from '../menu/Menu'
import PersonalInfo from '../personalInfo/PersonalInfo'

const { Sider, Content } = Layout

const MainLayout = () => {
	return (
		<Layout>
			<Sider className={styles.sidebar} width={256}>
				<Menu />
			</Sider>
			<Layout className={styles.contentLayout}>
				<Content className={styles.content}>
					<PersonalInfo />
				</Content>
			</Layout>
		</Layout>
	)
}

export default MainLayout
