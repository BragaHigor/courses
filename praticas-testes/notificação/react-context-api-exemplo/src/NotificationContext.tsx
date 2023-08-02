import { createContext, ReactNode, useState } from "react"
import { NotificationProps } from "./Notification";

interface NotificationContextProps {

}

export const NotificationContext = createContext({})

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider = ({
    children,
}: NotificationProviderProps) => {

    const [ notifications, setNotifications ] = useState<NotificationProps[]>([])

    const value = {}
    return (
        <NotificationContext.Provider value={value}>
            {children}
            <div className="notifications">
                {notifications.map((item) => (
                    <Notification {...item} />
                ))}
                />
            </div>
        </NotificationContext.Provider>
    )
}