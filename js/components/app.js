var React = require('react');
var Sidebar = require('./sidebar');

var EMAILS = require('../emails');

var App = function(props) {
    var mailboxes = Object.keys(EMAILS);

    return (
        <div className="layout">
            <Sidebar mailboxes={mailboxes} className="layout__sidebar" />
        </div>
    );
};

module.exports = App;
