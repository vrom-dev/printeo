import './styles.css'

export const Notification = ({ message, succeed }) => {
  return <div className={succeed ? 'notification-succeed' : 'notification-error'}>{message}</div>
}