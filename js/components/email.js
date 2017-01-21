var React = require('react');

var Email = function(props) {
    var email = props.email;
    return ( 
        <div className="email">
            <h3>{email.title}</h3>
            <strong>To:</strong>&nbsp;{email.to}<br />
            <strong>From:</strong>&nbsp;{email.from}<br />
            <br />
            <span>{email.content}</span>
        </div>
    );
}

module.exports = Email;
