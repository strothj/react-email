var React = require('react');
var EmailList = require('./email-list');

var EMAILS = require('../emails.js');

var EmailListContainer = function(props) {
    var emails = EMAILS[props.params.mailbox_name];
    if (!emails) emails = [];
    emails = Object.values(emails);

    return (
        <EmailList emails={emails} mailbox_name={props.params.mailbox_name} />
    );
}

module.exports = EmailListContainer;
