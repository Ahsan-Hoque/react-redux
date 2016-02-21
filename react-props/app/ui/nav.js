/**
 * Created by ahsan on 2/21/16.
 */

import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <nav>
                {this.props.children}
            </nav>
        )
    }
});