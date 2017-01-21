var React = require('react')

var PageContent = function(props) {
    return (
        <div className="page-content">
            {props.children}
        </div>
    );
}

module.exports = PageContent;
