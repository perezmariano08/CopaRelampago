import React from 'react'
import { NotificationsContainer, NotificationsStyledContainer, NotificationsWrapper } from './NotificationsStyles'
import Notification from './Notification'
import { AnimatePresence } from 'framer-motion'

const Notifications = () => {
  return (
    <AnimatePresence>
      <NotificationsStyledContainer
          initial={{ translateX: 1000 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 1000, opacity: 0 }}
          transition={{ type: "spring", damping: 27 }}
          key="menu-modal">
        <NotificationsWrapper>
            <h3>Notificaciones</h3>
            <NotificationsContainer>
                <Notification/>
            </NotificationsContainer>
        </NotificationsWrapper>
      </NotificationsStyledContainer>
    </AnimatePresence>

  )
}

export default Notifications