const mailAction = require('../constans/email-action');

module.exports = {
    [mailAction.WELCOME]: {
        subject: 'WELCOME ON BOARD',
        templateName: 'welcome'
    },

    [mailAction.USER_BLOCKED]: {
        subject: 'Your account is blocked',
        templateName: 'user-blocked'
    }
};
