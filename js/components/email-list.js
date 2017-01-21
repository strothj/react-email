var React = require('react');
var Link = require('react-router').Link;

var EmailList = function(props) {
    var emailList = props.emails.map(function(email){
        return (
            <div key={email.id} className="email">
                <Link to={'/' + props.mailbox_name + '/' + email.id}>
                    <h3>{email.title}</h3>
                </Link>
            </div>
        );
    });

    return (
        <div>
            {emailList}
        </div>
    );
}

module.exports = EmailList;
