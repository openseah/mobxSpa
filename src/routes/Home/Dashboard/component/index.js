import Component from 'components/Component'
import { Helmet } from 'react-helmet'

export default class Dashboard extends Component {
    render() {
        const style = {
            textAlign: 'center',
            fontSize: 30,
            marginTop: 60
        }
        return (
            <div style={style}>
                <Helmet>
                    <title>仪表盘 - 论答CRM</title>
                    <meta name='description' content='论答CRM' />
                </Helmet>
                欢迎来到论答CRM系统
            </div>
        )
    }
}