export type NotificationType = 'info' | 'warning' | 'error' | 'success'

export interface NotificationProps {
    title: string,
    description?: string,
    type: NotificationType,
    timeoute?: number,
}

export const Notification = ({ 
    title, 
    description, 
    type, 
    timeoute,

}: NotificationProps) => {

    return (
        <div className="notification">
            <button className="notification__close-btn">X</button>
            <h3 className="notification__title">{title}</h3>
            {description ? <p className="notification__description"> {description}</p> : null}
        </div>
    )
}