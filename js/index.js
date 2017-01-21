require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var App = require('./components/app');
var PageContent = require('./components/page-content');
var EmailListContainer = require('./components/email-list-container');
var EmailContainer = require('./components/email-container');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path=":mailbox_name" component={PageContent}>
                <IndexRoute component={EmailListContainer} />
                <Route path=":emailId" component={EmailContainer} />
            </Route>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
