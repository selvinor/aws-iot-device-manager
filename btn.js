import React, { Component } from 'react';

class Btn extends Component {

    state = {
        disabled: false
    };

    handler() {
        let handler = this.props.handler();

        // If promise is returned disable button
        if (handler && Promise.resolve(handler)) {
            // Disable button
            this.setState({disabled: true});
            // Un-disable button after promise has resolved or rejected
            return handler.then(() => {
                return this.setState({disabled: false});
            }).catch(() => {
                return this.setState({disabled: false});
            });
        }
    }

    attrs() {
        return {
            plants : this.props.name,
            type     : 'button',
            role     : 'button',
            onClick  : this.handler.bind(this),
            disabled : this.state.disabled
        };
    }

    render() {
        return <button {...this.attrs()} />;
    }
}

Btn.defaultProps = {
    handler: () => {}
};

export default Btn;