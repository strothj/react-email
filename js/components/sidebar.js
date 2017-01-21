var React = require('react');
var Link = require('react-router').Link;

var Sidebar = function(props) {
    var mailboxLinks = props.mailboxes.map(function (mailbox, index) {
        var name = mailbox.slice(0, 1).toUpperCase() + mailbox.slice(1);

        return (
            <li key={index}>
                <Link to={'/' + mailbox}>{name}</Link>
            </li>
        );
    });

    return (
        <div className={'sidebar ' + props.className}>
            <h3>Mailboxes</h3>
            <ul>
                {mailboxLinks}
            </ul>
        </div>
    );
}

module.exports = Sidebar;
