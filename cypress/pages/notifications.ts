export class NotificationsPage {

    // Notifications page web elements
    elements = {
        getNotificationList: () => cy.get('[data-test="notifications-list"]').find('li')
    }

    // Return the number of notifications
    numberOfNotifications() {
        return this.elements.getNotificationList().then((notifications) => notifications.length )
    }


}

export const Notifications = new NotificationsPage()